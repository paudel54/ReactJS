import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

// const NavigationProvider = () => {
//     // can be done also with arrow function
// }
// It a provider that will be avialbe to all the component
function NavigationProvider({ children }) {
    // useState for Navigation, current path track with window.location.pathname
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);
        // if component gets collapesed we need to remove event listeners to prevent memory leaks
        return () => {
            window.removeEventListener('popstate', handler);
        };
    }, []);

    const navigate = (to) => {
        // to === '/accordion' or '/dropdown
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    return <NavigationContext.Provider value={{ currentPath, navigate }}>
        {/* <div>
            <button onClick={() => navigate('./accordion')}>Got to Accor</button>
            <button onClick={() => navigate('./dropdown')}>Go to dropdown</button>
        </div> */}
        {/* yo chi dekha */}
        {/* {currentPath} */}
        {children}
    </NavigationContext.Provider>
}

export { NavigationProvider }
export default NavigationContext;