import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';


function App() {
    const [books, setBooks] = useState([]);
    //event handler to pass as prop
    //for custom event handler we can pass prop name of our choice

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        // returns list of data so response.data to access list
        setBooks(response.data);
    };
    // not to do call fetchBooks(); here, it creates infinite network request, which is very bad practice

    // implemented useEffect, to render the server stored info on start up only once
    useEffect(() => {
        fetchBooks();
    }, []);

    //fn to edit book from child comp into parent.
    //update element with map function.
    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        console.log(response);

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                // auto update with API response
                return { ...book, ...response.data };
            }
            return book;
        });
        setBooks(updatedBooks);
    };



    //function to delete record from child comp
    //filter method doesn't modify original array, it recreates new array instead called book here in return.
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };


    const createBook = async (title) => {
        //Bad Code practise for updating array on state change
        // books.push({id: 14, title: title});
        // console.log(books);
        // setBooks(books);

        //updating book list
        //making network request to post 
        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        // console.log(response);
        const updatedBooks = [
            ...books,
            response.data
        ];
        setBooks(updatedBooks);
    };


    return <div className='app'>
        <h1>Reading List</h1>
        {/* need to find out why books.length gets updated length ? */}
        {/* {books.length} */}
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
        <BookCreate onCreate={createBook} />

    </div>
};

export default App;