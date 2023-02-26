import './payment.scss';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../checkout/CheckoutProduct';
import { Link } from 'react-router-dom';

export default function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
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
                    </div>
                </div>

            </div>
        </div>
    )
}
