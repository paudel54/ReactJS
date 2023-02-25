import React from 'react'
import "./checkout.scss";
import Subtotal from '../../Components/subtotal/Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from "../../StateProvider";

export default function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/AugART/Teaser/PC/revised/V1/FIle-1_PC_01.jpg" alt="imagebanner" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    {/* Checkout products */}
                    {/* Checkout products */}
                    {/* Checkout products */}

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
                <h2>Subtotal here</h2>
            </div>

        </div>
    )
}
