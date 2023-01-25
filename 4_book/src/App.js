import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';


function App() {
    // useContext fn to reach to context book.js ,,destructing from use context to use fetch book fn
    const { fetchBooks } = useContext(BooksContext);
    // not to do call fetchBooks(); here, it creates infinite network request, which is very bad practice
    // implemented useEffect, to render the server stored info on start up only once
    useEffect(() => {
        fetchBooks();
    }, []);




    return <div className='app'>
        <h1>Reading List</h1>
        {/* need to find out why books.length gets updated length ? */}
        {/* {books.length} */}

        <BookList />
        <BookCreate />

    </div>
};

export default App;