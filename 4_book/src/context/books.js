// created Books Context 
import { createContext, useState } from 'react';
import axios from 'axios';
const BooksContext = createContext();

//new component Provider
function Provider({ children }) {
    const [books, setBooks] = useState([]);
    //event handler to pass as prop
    //for custom event handler we can pass prop name of our choice

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        // returns list of data so response.data to access list
        setBooks(response.data);
    };

    //fn to edit book from child comp into parent.
    //update element with map function.
    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        // console.log(response);

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
        // response.data => {title:'text input', id:1}
        const updatedBooks = [
            ...books,
            response.data
        ];
        setBooks(updatedBooks);
    };
    // here value is crucial whatever we want to share sould be passed form this point
    const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    };
    return <BooksContext.Provider value={{ valueToShare }}>
        {children}
    </BooksContext.Provider>
}
// custom export
export { Provider };
export default BooksContext;

//to use both exports in other files we can write it as :

//import BooksContext, { Provider} from './'