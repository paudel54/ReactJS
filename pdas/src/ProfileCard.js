//passing props as argument,object to receive the props sent from parent app.js
//not necessary to pass argument name as props its a variable and can be named anythings
function ProfileCard({ title, handle }) {
    // const title = props.title;
    // const handle = props.handle;
    //adding to variable can be a good thing but we can do it in better way: 
    //Use of argument destructing;
    //value are automatically assigned synchronously from props to const obj 
    // const { title, handle } = props;
    //even better apprach for destructing argument is that assigning directly into the argument
    //the advantag of doing so it that we can extract the prop only that are req in case of builing components
    return (
        <div>
            {/* javascript var should be inside a curly braces */}
            <div>Title is {title} </div>
            <div>Handle is {handle}</div>
        </div>
    );
}

export default ProfileCard; 