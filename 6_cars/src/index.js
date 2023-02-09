// BoilerPlate To link up the index.html under public folder. 
// App component is being imported and rendered out. 
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
const el = document.getElementById('root');
const root = createRoot(el);

root.render(<App />); 