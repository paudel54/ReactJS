import ProfileCard from "./ProfileCard";

function App() {
    return (
        <div>
            <div>Personal Digital Assistance</div>
            {/* //here the profile card will make styles or prop which then passes as object into child component, here ProfileCard Component
            //the passed data is grabbed synchronously by child component ProfileCard and renders and returns one at time. */}
            <ProfileCard title="Alexa" handle="@alexa" />
            <ProfileCard title="Cortana" handle="@cortana32" />
            {/* //!here the porp attribute name such as title, handle are written custom, we can use it as our native attribute unless some keyword can conflict with react defined keywords */}
            <ProfileCard title="Siri" handle="@siri" />


        </div>
    );
}

export default App;