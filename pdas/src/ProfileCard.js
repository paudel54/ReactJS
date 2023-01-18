//passing props as argument,object to receive the props sent from parent app.js
//not necessary to pass argument name as props its a variable and can be named anythings
function ProfileCard(props) {
    return (
        <div>
            {/* javascript var should be inside a curly braces */}
            <div>Title is {props.title} </div>
            <div>Handle is {props.handle}</div>
        </div>
    );
}

export default ProfileCard; 