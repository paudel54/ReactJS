//first gets executed and lets create step by step procedures.

//1)Import the React and ReactDom Libraries to show content on screen

//react is a base library, that can be handy to use for different apps like mobile or web
//it is used for creating components, browsers dont understand react so there came need of reactDOM
//reactDOM, renders all the components that's written into a web. 
import React from 'react';
import ReactDOM from 'react-dom/client';
//Import a component from other file
import App from './App';


//2)Get a reference to the html div file name index.js with ID root
const el = document.getElementById('root');
//3)Tell React to take control of that element, we want to show element inside this
const root = ReactDOM.createRoot(el);



//5) Show the component on the screen 
root.render(<App />);