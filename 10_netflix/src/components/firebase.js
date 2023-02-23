// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// REACT_APP_FIREBASE_API_KEY=AIzaSyBbNr6eOU4wumOq60hwOrBfCADPy7mtUu4
// REACT_APP_FIREBASE_AUTH_DOMAIN=netflix-ccb6c.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netflix-ccb6c
// REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-ccb6c.appspot.com
// REACT_APP_MESSAGING_SENDER=465820835916
// REACT_APP_APP_ID=1:465820835916:web:6290c4e3129de08d9394e9

