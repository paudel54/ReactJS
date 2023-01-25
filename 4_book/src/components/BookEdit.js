import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('New Title', title);
        // onEdit(book.id, title);
        onSubmit();
        editBookById(book.id, title);
    }

    return <form className="book-edit" onSubmit={handleSubmit}>
        {/* when user enters on form or slick on button we want to handle that , so defined on form element 
        Named handle submit*/}
        <label>Title</label>
        {/* in React every time we have input we need to see state change */}
        <input className="input" value={title} onChange={handleChange} />
        <button className="button is-primary">
            Save
        </button>
    </form>
}

export default BookEdit;