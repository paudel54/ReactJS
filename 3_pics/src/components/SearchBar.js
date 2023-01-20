//Here onSubmit prop is taken out from App.js custom component prop name
function SearchBar({ onSubmit }) {

    onSubmit('carss')

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Passing data from child to parent ')
    };

    return <div>
        {/* wrapping the input element inside form element  porvides a power to submit the form auto when user hits enter*/}
        <form onSubmit={handleFormSubmit}>
            <input />
        </form>

        {/* <button onClick={handleClick}>Click here</button> */}
    </div>
}

export default SearchBar;