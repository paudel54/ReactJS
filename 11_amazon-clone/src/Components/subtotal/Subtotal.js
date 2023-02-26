import './subtotal.scss';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from '../../reducer';
import { useNavigate } from 'react-router';

export default function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                // renderprop
                renderText={(value) => (
                    <>
                        <p>
                            {/* self work */}
                            Subtotal  ({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' /> This order contains a gift
                        </small>
                        <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
                    </>
                )}
                decimalScale={2}
                // update value with sum that you got from the prob passing
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}


// import { Link, useNavigate } from 'react-router-dom'
// const navigate = useNavigate ();
// navigate('/')
