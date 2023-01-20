//Here onSubmit prop is taken out from App.js custom component prop name
function SearchBar({ onSubmit }) {
    console.log(onSubmit);
    const handleClick = () => {
        onSubmit('Cars');
    }

    return <div>
        <input />
        <button onClick={handleClick}>Click here</button>
    </div>
}

export default SearchBar;