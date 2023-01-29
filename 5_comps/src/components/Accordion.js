// more learning of react state system
import { useState } from 'react';

// created component named Accordion.
function Accordion({ items }) {
    // state var and setter fn for expandedIndex, with  a default value 0. i,e first obj ati 0 index will be 
    //expanded other would be collasped. 
    const [expandedIndex, setExpandedIndex] = useState(0);

    const renderedItems = items.map((item) => {
        return (
            // on building list the parent div must possess id, that may in future come from external api or anythings,

            <div key={item.id}>
                <div>{item.label}</div>
                <div>{item.content}</div>
            </div>
        );
    });
    return <div>
        {renderedItems}
    </div>;
}

export default Accordion;