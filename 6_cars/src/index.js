// BoilerPlate To link up the index.html under public folder. 
// App component is being imported and rendered out. 
// import css
import 'bulma/css/bulma.css';
import './styles.css';
import { Provider } from 'react-redux';
import { store } from './store'

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
const el = document.getElementById('root');
const root = createRoot(el);

// root.render(<App />);

root.render(<Provider store={store}>
    <App />
</Provider>);

// connecting redux to react side one time setup is req
// importing provider and store in index.js here