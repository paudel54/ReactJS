import { useState } from 'react';
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    // event handler
    const handleClick = () => {
        // if false true if true false, !isOpen => notisOpen
        // functional appraoch: setIsOpen((currentIsOpen)=> !currentIsOpen);
        setIsOpen(!isOpen);
    };
    // Here option is an arugument variable
    const handleOptionClick = (option) => {
        // console.log('I should Close');
        // close dropdown
        //  what option did the use clicked?
        setIsOpen(!isOpen);
        // console.log(option);
        // rerenders element as it calles event handler on app.js which makes communnication to parent
        onChange(option);
    }

    const renderedOptions = options.map((option) => {
        return <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handleOptionClick(option)} key={option.value}>
            {/* {console.log(option)} */}
            {/* Object { label: "Red", value: "red" }
            Object { label: "Green", value: "green" }
            Object { label: "Blue", value: "blue" } */}
            {option.label}
        </div>
    });


    // let content = 'Select.........';
    // // if selection is not null in defalut update the content with the clicked label
    // if (selection) {
    //     content = selection.label;
    // }
    // Refactoring a code snippet

    return <div className="w-48 relative">
        <Panel className='flex justify-between items-center cursor-pointer ' onClick={handleClick}>
            {/* if selection is null, it returns undefined therby 'Select... would come here */}
            {value?.label || 'Select ....'}
            {/* we can use react icon as a component */}
            <GoChevronDown className='text-lg' />
        </Panel>
        {/* adding logic to hide and show txt */}
        {isOpen && <Panel className='absolute top-full'> {renderedOptions}</Panel>}

    </div>

}
export default Dropdown; 