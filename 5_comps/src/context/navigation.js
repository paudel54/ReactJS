import { createContext } from 'react';

const NavigationContext = createContext();

// const NavigationProvider = () => {
//     // can be done also with arrow function
// }
// It a provider that will be avialbe to all the component
function NavigationProvider({ children }) {
    return <NavigationContext.Provider value={{}}>
        {children}
    </NavigationContext.Provider>
}

export { NavigationProvider }
export default NavigationContext;