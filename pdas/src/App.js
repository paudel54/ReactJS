//importing js file we do nt' need extension
import ProfileCard from "./ProfileCard";
//adding image with import use
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <div>Personal Digital Assistance</div>
            {/* displayed image */}
            {/* <img src={AlexaImage} />
            <img src={CortanaImage} /> */}
            {/* //here the profile card will make styles or prop which then passes as object into child component, here ProfileCard Component
            //the passed data is grabbed synchronously by child component ProfileCard and renders and returns one at time. */}
            <ProfileCard title="Alexa" handle="@alexa" image={AlexaImage} />
            <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} />
            {/* //!here the porp attribute name such as title, handle are written custom, we can use it as our native attribute unless some keyword can conflict with react defined keywords */}
            <ProfileCard title="Siri" handle="@siri" image={SiriImage} />


        </div>
    );
}

export default App;