//imported useState module to rerender screen on change in state system;
import { useState } from 'react';
import AnimalShow from './AnimalShow';

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

    //mapped the array and returned to animalshow component
    //animals.map maps tthe animal arrays and make sone changes with type and keys and returns to renderedAnimals
    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    console.log(renderedAnimals);
    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>{renderedAnimals}</div>
        </div>

    );
}

export default App;
