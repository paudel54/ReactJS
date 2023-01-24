import BookEdit from './BookEdit';
import { useState } from "react";

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);
    // delete child book show component, with the use of this handler
    const handleDeleteClick = () => {
        onDelete(book.id);
    };

    // edit child book show comp , with the use of this handler
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }
    // to  close form on update, with this handler
    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book}
            onSubmit={handleSubmit} />;
    }


    return <div className="book-show">
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