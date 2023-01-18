//App.js
function App() {
    //arrow function auto returns when called!
    //event handlesers
    const handleClick = () => {
        console.log('Button was Clicked!')
    }

    return <div>
        {/* adding events named handleClick */}
        <button onClick={handleClick}> Add Animal</button>
    </div>
}

export default App;
