import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// use of provider from context navigation
import { NavigationProvider } from './context/navigation';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

// rendering App components
// wrap app component with a Navigation Provider Component


root.render(
    <NavigationProvider>
        <App />
    </NavigationProvider>
); 