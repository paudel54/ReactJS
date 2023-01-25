// created Books Context 
import { createContext, useState } from 'react';

const BooksContext = createContext();

//new component Provider
function Provider({ children }) {


    return <BooksContext.Provider value={{}}>
        {children}
    </BooksContext.Provider>
}
// custom export
export { Provider };
export default BooksContext;

//to use both exports in other files we can write it as :

//import BooksContext, { Provider} from './'