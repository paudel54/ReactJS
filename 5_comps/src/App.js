// Parent Component Dropdown
import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
    // by default nothing have been selected. 
    const [selection, setSelection] = useState(null);
    // Creating event handler , that passes to parent  when sate changes
    // we are receiving newly selected option and updating the state.
    const handleSelection = (option) => {
        setSelection(option);
    };

    const options = [
        {
            label: 'Red', value: 'red'
        },
        {
            label: 'Green', value: 'green'
        },
        {
            label: 'Blue', value: 'blue'
        }
    ];


    // Passed prop(selection) & handler(handleSelection) from parent to child dropdown.
    return <Dropdown options={options} selection={selection} onSelect={handleSelection} />;
}

export default App;
