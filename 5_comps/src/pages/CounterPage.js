import { useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';


// considering this component receives intial props and set defalut value for count
function CounterPage({ intialCount }) {
    const [count, setCount] = useState(intialCount);
    const [valueToAdd, setValueToAdd] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    // whenever event hander is called it gets called with the event object
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        setValueToAdd(value);
    };
    // Whenever we submit a form brower by default tries to submit form for us we want to prevent that default behaviour.

    const handleSubmit = (event) => {
        event.preventDefault();
        setCount(count + valueToAdd);
        setValueToAdd(0);
    }

    return (
        <Panel className="m-3">
            <h1 className='text-lg'> Count is {count} </h1>

            <div className='flex flex-row'>
                <Button onClick={increment}> Increment </Button>
                <Button onClick={decrement}> Decrement </Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                {/* onto input feild the onChange handler passes and event prop to handler defined */}
                <input
                    value={valueToAdd || ""}
                    onChange={handleChange}
                    type="number"
                    className='p-1 m-3 bg-gray-50 border border-gray-300' />
                <Button>Add it!</Button>
            </form>
        </Panel>
    );




}

export default CounterPage;