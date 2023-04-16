// JSX is simply an instruction for react to render
//imported useState module to rerender screen on change in state system;
import { useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css';

function getRandomAnimal() {
    console.log('finding out animals in array in random')
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)]
}

// console.log(geRandomAnimal())

function App() {

    //initiated with empty array
    const [animals, setAnimals] = useState([]);
    console.log('animal initial', animals);
    console.log('animals after event handling or setter fn', setAnimals)
    const handleClick = () => {
        //calling function getRandomAnimal and stores onto the ...animals array
        //updates array

        setAnimals([...animals, getRandomAnimal()]);
    };

    //mapped the array and returned to animalshow component
    //animals.map maps tthe animal arrays and make sone changes with type and keys and returns to renderedAnimals
    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    // console.log(renderedAnimals);
    return (
        <div className='flex flex-col items-center justify-center'>
            <button className='mt-10 text-white bg-blue-700 shadow-xl hover:bg-blue-800 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 w-[10rem]' type='button' onClick={handleClick}>Add Animals</button>
            <div> <div className='flex flex-wrap w-3/4 mx-auto'>{renderedAnimals}</div></div>
        </div>

    );
}

export default App;


// UNDERSTOOD STATE
//EVENTS
//SETTLER FUNCTION
//DESTRUCTURING
//BUILDING LIST

