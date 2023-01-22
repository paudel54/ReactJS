//Here onSubmit prop is taken out from App.js custom component prop name
//1.defining  new state for handling input elements
import { useState } from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');
    // onSubmit('carss')

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Passing data from child to parent ');
        onSubmit(term);
    };

    //2.Event handler to watch for the 'onChange' . whenever this handler is called is called
    //we receive event object
    const handleChange = (event) => {
        //3.Got value from input with event.target.value
        // console.log(event.target.value);
        //4.use with setter func to take value from input and update

        // we can only type upper case letters or number by use of regex
        //setTerm(event.target.value.replace([/a-z/], ''));
        setTerm(event.target.value);

    };

    return <div>
        {/* wrapping the input element inside form element  porvides a power to submit the form auto when user hits enter*/}
        <form onSubmit={handleFormSubmit}>
            {/* term is a var from useState */}
            Confirm your Search: {term}
            <br></br>
            {/* wiring up the event handler to input telling up with current value must be term or '' state */}
            <input value={term} onChange={handleChange} />
        </form>

        {/* <button onClick={handleClick}>Click here</button> */}
    </div>
}

export default SearchBar;