import Button from '../components/Button';
import useCounter from '../hooks/use-counter';

// considering this component receives intial props and set defalut value for count
function CounterPage({ intialCount }) {
    // Calling the function and destructuring the component needs.
    // passing prop as an argument to 
    const { count, increment } = useCounter(intialCount);
    return <div>
        <h1> Count is {count} </h1>
        <Button onClick={increment}>
            Increment
        </Button>
    </div>
}

export default CounterPage;