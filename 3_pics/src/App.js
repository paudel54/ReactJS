//import for passing image to image list
import { useState } from 'react';
import SearchBar from './components/SearchBar';
//App be the parent , SearchBar be a child component

import SearchImages from './api';
import ImageList from './components/ImageList';

function App() {
    //creating new state for passing image to imageList
    //here image set is updated from child component
    const [images, setImages] = useState([]);
    // Creating event handler for handleSubmit
    const handleSubmit = async (term) => {
        console.log('Do a search with', term);
        const result = await SearchImages(term);
        // console.log(result); 
        //update setImages states
        setImages(result);
    };

    return (
        <div>

            {/* Passing props to SearchBar Component, for cutom component we call prop with any name */}
            {/* we can call onSubmit with any custom prop Name */}
            {/* only in case of use of builtin custom btn we need to use definate name */}
            {/* only thing that matters is name of prop matches to child comp */}
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>);
}

export default App;

// MINI PROJECT 3 , SEARCH IMAGES WITH API CALL ACCOMPLISHED.
//Image Search with use of API
//Child to Parent Communication.