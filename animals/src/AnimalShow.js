import { useState } from 'react';
//component 1 
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

//creating key for animals with svgMap obj
const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
};

//we can receive whole obj as prop or obj destructing what we want tht can be written
function AnimalShow({ type }) {
    //use of State System
    const [clicks, setClicks] = useState(0);

    //created handler function
    const handleClick = () => {
        setClicks(clicks + 1);

    };
    // console.log({ type })
    // {
    //     "type": "cat"
    //   }
    return (
        <div onClick={handleClick}>
            <img alt="animal" src={svgMap[type]} />
            <img alt="heart" src={heart} style={{ width: 10 + 10 * clicks + 'px' }} />
        </div>
    );
}

export default AnimalShow;