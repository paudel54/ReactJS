import './checkoutProduct.scss';
import { useStateValue } from '../../StateProvider';
import FlipMove from 'react-flip-move';

export default function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        // remove the item from basket: 

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });

    }

    return (

        <div className='checkoutProduct'>
            <FlipMove >
                <img className='checkoutProduct__image' src={image} alt="photou" />

                <div className='checkoutProduct__info'>
                    <p className='checkoutProduct__title'>{title}</p>
                    <p className='checkoutProduct__price'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className='checkoutProduct__rating'>
                        {
                            // if you think you just dont care first part put underscore
                            Array(rating).fill().map((_, i) => (<p>⭐</p>))
                        }
                    </div>
                    <button onClick={removeFromBasket}>Remove From Basket</button>
                </div>
            </FlipMove>

        </div>


    )
}
