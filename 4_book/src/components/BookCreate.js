import { useState } from "react";

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    //watch for change on input form
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        //when form gets submitted form input feild we want impur field to be empty
        //This is acheive by making setter function empty
        setTitle('')
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            {/* wiring up title and handle change in input element */}
            <input value={title} onChange={handleChange} />
            <button>Create!</button>
        </form>
    </div>
}

export default BookCreate;