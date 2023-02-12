import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// to make the tailwind works, importing tailwind base style
import './index.css';
// wiring up redux store with react side of app two imports provider and store is necessary
import { Provider } from 'react-redux';
import { store } from './store'


const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
