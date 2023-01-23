import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
    const [books, setBooks] = useState([]);
    //event handler to pass as prop
    //for custom event handler we can pass prop name of our choice
    const createBook = (title) => {
        //Bad Code practise for updating array on state change
        // books.push({id: 14, title: title});
        console.log(books);
        // setBooks(books);

        //updating book list
        const updatedBooks = [
            ...books,
            { id: 123, title: title }
        ];

        setBooks(updatedBooks);

        console.log('Need to add book with', title)
    };
    return <div>
        <BookCreate onCreate={createBook} />
    </div>
}

export default App;