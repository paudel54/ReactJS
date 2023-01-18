//passing props as argument,object to receive the props sent from parent app.js
//not necessary to pass argument name as props its a variable and can be named anythings
function ProfileCard({ title, handle, image, description }) {
    // const title = props.title;
    // const handle = props.handle;
    //adding to variable can be a good thing but we can do it in better way: 
    //Use of argument destructing;
    //value are automatically assigned synchronously from props to const obj 
    // const { title, handle } = props;
    //even better apprach for destructing argument is that assigning directly into the argument
    //the advantag of doing so it that we can extract the prop only that are req in case of builing components
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    {/* javascript var should be inside a curly braces */}
                    <img src={image} alt="icons" />
                </figure>
            </div>

            <div className="card-content">

                <div className="media-content">
                    <p className="title is-4">{title} </p>
                    <p className="title is-6">{handle}</p>
                </div>

                <div className="content">{description}</div>

            </div>



        </div>
    );
}

export default ProfileCard; 