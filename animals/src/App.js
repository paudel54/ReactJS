//imported useState module to rerender screen on change in state system;
import { useState } from 'react';

function App() {
    //Array Destructing 
    //we dont change count , like count = 5;
    ///1 defined useState to change state
    const [count, setCount] = useState(0);
    //Arrow function auto returns when called!
    //event handlesers
    const handleMouseMove = () => {
        //update the state by calling setter func
        setCount(count + 1);
    };

    return <section>
        {/* adding events named handleClick */}
        {/* <button onClick={handleClick}> Add Animal</button> */}
        {/* //uuse the state */}
        {/* <div>Number of Animals: {count} </div> */}
        <div onMouseMove={handleMouseMove} style={{ height: '200px', width: '200px', backgroundColor: 'lightblue' }}>Move Mouse Here</div>
        {/* added event handler*/}
        <div>Number of onMouseMove event:{count} </div>
    </section>
}

export default App;
