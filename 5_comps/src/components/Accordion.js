// more learning of react state system
import { useState } from 'react';
// these icon imports are react components and must be used on that manner upon implementation.
import { GoChevronLeft, GoChevronDown } from "react-icons/go";
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
    // {/* Alternative Ways */ }

    // Delayed state updates so, doing it more professionally
    const handleClick = (nextIndex) => {
        console.log(expandedIndex);
        if (expandedIndex === nextIndex) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(nextIndex);
        }
    };

    // Functional State Updates
    // const handleClick = (nextIndex) => {
    //     console.log('Stale version of expandedIndex', expandedIndex)
    //     setExpandedIndex((currentExpandedIndex) => {
    //         console.log('Upto Date Version', currentExpandedIndex);
    //         if (currentExpandedIndex === nextIndex) {
    //             return -1;
    //         }
    //         else {
    //             return nextIndex;
    //         }
    //     });
    // };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        // const content = isExpanded && <div>{item.content}</div>
        // console.log(isExpanded);
        // console.log(content);
        const icon = <span className='text-2xl'>
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span >
        return (
            // on building list the parent div must possess id, that may in future come from external api or anythings,

            <div key={item.id}>
                {/*  WITH MAP fn we are creating numbers of multiple event handlers*/}
                {/* one for every single objects inside of items array*/}
                {/* <div onClick={() => {
                    console.log('Can add more event Handlers');
                    setExpandedIndex(index)
                }}>{item.label}</div> */}
                {/* Alternative method above mentioned on func */}
                <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer '
                    onClick={() => handleClick(index)}>

                    {item.label}
                    {icon}
                </div>


                {/* passing condition directly into a return,this helps in omitting variable */}
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>
        );

    });

    return <div className='border-x border-t rounded'>
        {renderedItems}
    </div>;
}

export default Accordion;