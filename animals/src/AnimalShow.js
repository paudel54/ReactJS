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
    // console.log({ type })
    // {
    //     "type": "cat"
    //   }
    return <div> <img alt="animal" src={svgMap[type]} /> </div>
}

export default AnimalShow;