import './subtotal.scss';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";

export default function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
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
                        <button>Proceed to Checkout</button>
                    </>
                )}
                decimalScale={2}
                // update value with sum that you got from the prob passing
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}