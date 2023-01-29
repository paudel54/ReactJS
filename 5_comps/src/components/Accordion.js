// more learning of react state system
import { useState } from 'react';

// created component named Accordion.
function Accordion({ items }) {
    // state var and setter fn for expandedIndex, with  a default value 0. i,e first obj ati 0 index will be 
    //expanded other would be collasped. 
    // console.log(items);
    const [expandedIndex, setExpandedIndex] = useState(0);

    // type 1 to map and access
    // const renderedItems = items.map((item, index) => {
    // if (index === expandedIndex) {
    //     console.log('expanded');
    // } else {
    //     console.log('collapsed');
    // }
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        console.log(isExpanded);


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