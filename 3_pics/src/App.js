//
import SearchBar from './components/SearchBar'
//App be the parent , SearchBar be a child component

import SearchImages from './api'
function App() {
    // Creating event handler for handleSubmit
    const handleSubmit = async (term) => {
        // console.log('Do a search with', term);
        const result = await SearchImages(term);
        console.log(result);
    };

    return (
        <div>

            {/* Passing props to SearchBar Component, for cutom component we call prop with any name */}
            {/* we can call onSubmit with any custom prop Name */}
            {/* only in case of use of builtin custom btn we need to use definate name */}
            {/* only thing that matters is name of prop matches to child comp */}
            <SearchBar onSubmit={handleSubmit} />
        </div>);
}

export default App;