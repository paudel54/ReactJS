//imported useState module to rerender screen on change in state system;
import { useState } from 'react';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)]
}

// console.log(getRandomAnimal())

function App() {

    //initiated with empty array
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        //calling function getRandomAnimal and stores onto the ...animals array
        setAnimals([...animals, getRandomAnimal()]);
    };

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>{animals}</div>
        </div>

    );
}

export default App;
