import './payment.scss';
import { useState, useEffect } from 'react';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../checkout/CheckoutProduct';
import { Link, Navigate } from 'react-router-dom';
//3rd dependency for payment
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from '../../reducer';
import axios from '../../axios';

export default function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    // using 2 hooks for payment

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generates the special stripe secret which allows us to charge a customer
        // whenever a basket changes we need a new secret
        const getClientSecret = async () => {
            // we expect respose to have a client secrets
            const response = await axios({
                method: 'post',
                // Stripe expects total in currencies subunits: pass$=>expect to have in cents
                url: `/payments/create?Total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket]);

    console.log('the secret is >>', clientSecret);

    const handleSubmit = async (event) => {
        // stripe stuff do al lthe fancy
        event.preventDefault();
        setProcessing(true);

        // clientSecret is only the way that stripe knows how it gonna charge for customers!
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment Confirmation
            setSucceeded(true)
            setError(null)
            setProcessing(false)
            Navigate('./orders')
        })


    }
    const handleChange = event => {
        // handleChange
        // listen for changes in the CardElement
        // displays any error as the customer types their card details
        // if event is empty disable the btn
        setDisabled(event.empty);
        setError(event.error ? event.error.message : ' ')

    }

    return (
        <div className='payment'>
            {/* payment section-delivery address */}
            <div className='payment__container'>
                <h1>
                    Checkout(<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p> {user?.email} </p>
                        <p>Lane way</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                {/* payment section -Review Intems */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Review items and delivery.</h3>
                    </div>
                    <div className="payment__items">
                        {/* utilizing reuseable component react wowhoo */}
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* pyment section -payment method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* stripe integration */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
