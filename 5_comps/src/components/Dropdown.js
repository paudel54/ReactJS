import { useState } from 'react';

function Dropdown({ options, selection, onSelect }) {
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
        onSelect(option);
    }

    const renderedOptions = options.map((option) => {
        return <div onClick={() => handleOptionClick(option)} key={option.value}>
            {/* {console.log(option)} */}
            {/* Object { label: "Red", value: "red" }
            Object { label: "Green", value: "green" }
            Object { label: "Blue", value: "blue" } */}
            {option.label}
        </div>
    });


    let content = 'Select.........';
    if (selection) {
        content = selection.label;
    }

    return <div onClick={handleClick}>
        {content}
        {/* adding logic to hide and show txt */}
        {isOpen && <div> {renderedOptions}</div>}
    </div>
}
export default Dropdown; 