// produce is a fn
import produce from 'immer';

// import { useState } from 'react';
import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

// decalring variable to prevent TYPO errors
const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change-value-to-add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';


const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1
            return;
        // return { changing code with immer fn , state change
        //     ...state,

        //     count: state.count + 1
        // };

        case DECREMENT_COUNT:
            state.count = state.count - 1;
            return;
        // return {
        //     ...state,
        //     count: state.count - 1
        // };

        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload;
            return;
        // return {
        //     ...state,
        //     valueToAdd: action.payload
        // };
        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;
        // return {
        //     ...state,
        //     count: state.count + state.valueToAdd,
        //     valueToAdd: 0
        // }
        default:
            return;
        // return state
    }

};

// considering this component receives intial props and set defalut value for count
function CounterPage({ intialCount }) {
    // const [count, setCount] = useState(intialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);

    // wrap reducer with produce to  implement immer for state change
    const [state, dispatch] = useReducer(produce(reducer), {
        count: intialCount,
        valueToAdd: 0
    });

    const increment = () => {
        // useReducer: useful when future state vlaue depends on current State
        // setCount(count + 1);
        // dispatch an action object that must have a type property
        dispatch({
            type: INCREMENT_COUNT,
        });
    };

    const decrement = () => {
        // setCount(count - 1);
        // Added action object with a type property
        dispatch({
            type: DECREMENT_COUNT,
        });
    };

    // whenever event hander is called it gets called with the event object
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value);
        // dispatch an action object, which must have type of string, 
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        });
    };
    // Whenever we submit a form brower by default tries to submit form for us we want to prevent that default behaviour.

    const handleSubmit = (event) => {
        event.preventDefault();
        // two peice of state closely realted , here count and valueToAdd. useReducer favours such state
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
        dispatch(
            {
                type: ADD_VALUE_TO_COUNT,
            }
        );
    }

    return (
        <Panel className="m-3">
            <h1 className='text-lg'> Count is {state.count} </h1>

            <div className='flex flex-row'>
                <Button onClick={increment}> Increment </Button>
                <Button onClick={decrement}> Decrement </Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                {/* onto input feild the onChange handler passes and event prop to handler defined */}
                <input
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                    type="number"
                    className='p-1 m-3 bg-gray-50 border border-gray-300' />
                <Button>Add it!</Button>
            </form>
        </Panel>
    );




}

export default CounterPage;