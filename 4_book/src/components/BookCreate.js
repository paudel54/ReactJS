import { useState } from "react";

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    //watch for change on input form
    const handleChange = (event) => {
        // console.log(event.target.value);
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        //when form gets submitted form input feild we want impur field to be empty
        //This is acheive by making setter function empty
        setTitle('')
    }
    return <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            {/* wiring up title and handle change in input element */}
            <input className="input" value={title} onChange={handleChange} />
            <button className="button">Create!</button>
        </form>
    </div>
}

export default BookCreate;