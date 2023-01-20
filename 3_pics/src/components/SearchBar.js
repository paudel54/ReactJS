//Here onSubmit prop is taken out from App.js custom component prop name
//1.defining  new state for handling input elements
import { useState } from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');
    onSubmit('carss')

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Passing data from child to parent ')
    };

    //2.Event handler to watch for the 'onChange' event
    const handleChange = (event) => {
        //3.Got value from input with event.target.value
        // console.log(event.target.value);
        //4.use with setter func to take value from input and update
        setTerm(event.target.value);
    };

    return <div>
        {/* wrapping the input element inside form element  porvides a power to submit the form auto when user hits enter*/}
        <form onSubmit={handleFormSubmit}>
            <input value={term} onChange={handleChange} />
        </form>

        {/* <button onClick={handleClick}>Click here</button> */}
    </div>
}

export default SearchBar;