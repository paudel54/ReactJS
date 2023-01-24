import BookEdit from './BookEdit';
import { useState } from "react";

function BookShow({ book, onDelete }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit />;
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