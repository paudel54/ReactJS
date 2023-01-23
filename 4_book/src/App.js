import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
    const [books, setBooks] = useState([]);
    //event handler to pass as prop
    //for custom event handler we can pass prop name of our choice
    const createBook = (title) => {
        console.log('Need to add book with', title)
    };
    return <div>
        <BookCreate onCreate={createBook} />
    </div>
}

export default App;