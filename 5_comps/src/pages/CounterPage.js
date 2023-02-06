import Button from '../components/Button';


// considering this component receives intial props and set defalut value for count
function CounterPage({ intialCount }) {

    return <div>
        <h1> Count is {count} </h1>
        <Button onClick={increment}>
            Increment
        </Button>
    </div>
}

export default CounterPage;