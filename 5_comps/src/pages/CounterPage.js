import { useState, useEffect } from 'react';
import Button from '../components/Button';

// considering this component receives intial props and set defalut value for count
function CounterPage({ intialCount }) {
    // count State
    const [count, setCount] = useState(intialCount)
    // UseEffect is a fn auto runs when comp rerender the page and state when count var is changed on bais of condition.
    useEffect(() => {
        console.log(count);
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    };

    return <div>
        <h1> Count is {count} </h1>
        <Button onClick={handleClick}>
            Increment
        </Button>
    </div>
}

export default CounterPage;