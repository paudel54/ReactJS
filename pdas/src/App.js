//importing css libraries bulma form node module,
//if we want to direct the path onto node module we dont need the ../ direction simply consider node_moules inside files
//here bulma is a folder inside node_module css is next folder inside it and we can access file bulma.css
import 'bulma/css/bulma.css'


//importing js file we do nt' need extension
import ProfileCard from "./ProfileCard";
//adding image with import use
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        //used the css libraries to style the props before passing into component
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistance</p>
                </div>
            </section>


            {/* displayed image */}
            {/* <img src={AlexaImage} />
            <img src={CortanaImage} /> */}
            {/* //here the profile card will make styles or prop which then passes as object into child component, here ProfileCard Component
            //the passed data is grabbed synchronously by child component ProfileCard and renders and returns one at time. */}
            {/* styled the props before throwing into components */}
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard title="Alexa"
                                handle="@alexa"
                                image={AlexaImage}
                                description="Alexa was created by Amazon and helps you buy things."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="Cortana"
                                handle="@cortana32"
                                image={CortanaImage}
                                description="Cortana was created by Microsoft and outdated."
                            />
                        </div>
                        <div className="column is-4">
                            {/* //!here the porp attribute name such as title, handle are written custom, we can use it as our native attribute unless some keyword can conflict with react defined keywords */}
                            <ProfileCard title="Siri"
                                handle="@siri"
                                image={SiriImage}
                                description="Siri was created by Apple and most popular this days"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;