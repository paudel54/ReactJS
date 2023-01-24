import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);
    //event handler to pass as prop
    //for custom event handler we can pass prop name of our choice
    const createBook = (title) => {
        //Bad Code practise for updating array on state change
        // books.push({id: 14, title: title});
        // console.log(books);
        // setBooks(books);

        //updating book list
        const updatedBooks = [
            ...books,
            {
                id: Math.round(Math.random() * 9999),
                title: title
            },

        ];
        setBooks(updatedBooks);
        console.log(books);
        console.log(books.length);
        console.log(updatedBooks);
        console.log(updatedBooks.length);
        console.log('Need to add book with', title)
    };
    return <div className='app'>
        {/* need to find out why books.length gets updated length ? */}
        {/* {books.length} */}
        <BookList books={books} />
        <BookCreate onCreate={createBook} />

    </div>
}

export default App;