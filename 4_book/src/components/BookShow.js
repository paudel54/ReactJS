function BookShow({ book, onDelete }) {
    console.log(onDelete);
    const handleClick = () => {
        onDelete(book.id);
    };


    return <div className="book-show">
        {book.title}
        <div className="actions">
            <button className="delete" onClick={handleClick}>
                del
            </button>
        </div>
    </div>
}

export default BookShow;