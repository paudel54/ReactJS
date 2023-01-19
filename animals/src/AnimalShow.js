//component 1 
//we can receive whole obj as prop or obj destructing what we want tht can be written
function AnimalShow({ type }) {
    // console.log({ type })
    // {
    //     "type": "cat"
    //   }
    return <div>{type}</div>
}

export default AnimalShow;