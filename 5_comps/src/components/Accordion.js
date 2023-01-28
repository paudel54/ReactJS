// created component named Accordion.
function Accordion({ items }) {
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