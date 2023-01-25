import BookEdit from './BookEdit';
import { useState, useContext } from "react";
import BooksContext from '../context/books';

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    // use context 
    const { deleteBookById } = useContext(BooksContext);

    // delete child book show component, with the use of this handler
    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };

    // edit child book show comp , with the use of this handler
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }
    // to  close form on update, with this handler
    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book}
            onSubmit={handleSubmit} />;
    }

    // console.log(book);

    return <div className="book-show">

        {/* adding images  solving bugs with diff link*/}
        <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
        {/* {book.title} */}
        {/* to make toggle functional we set content here */}
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>
                Edit
            </button>
            <button className="delete" onClick={handleDeleteClick}>
                delete
            </button>
        </div>
    </div>
}

export default BookShow;