import Link from "./components/link";
import Route from "./components/Route";
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';

function App() {
    return <div>
        <Link to="/accordion">
            {/* the text is passed as children and to '' is  a prop */}
            Go to Accordion
        </Link>

        <Link to="/dropdown">
            Go to Dropdown
        </Link>
        <div>
            <Route path="/accordion">
                <AccordionPage />
            </Route>
            <Route path="/dropdown">
                <DropdownPage />
            </Route>
        </div>
    </div>
}

export default App;