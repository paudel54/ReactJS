import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import BooksContext from './context/books';
import { Provider } from './context/books';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    // Here value is the crucial prop that we will be sharing on
    <Provider>
        {/* App component and all its children will have access to value prop */}
        <App />
    </Provider>


);