// one important add import
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getFirestore } from "firebase/firestore";

// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQ0hGXoe5w7vInDLsujyJjN7-4LGHgtwc",
    authDomain: "challenge-77073.firebaseapp.com",
    projectId: "challenge-77073",
    storageBucket: "challenge-77073.appspot.com",
    messagingSenderId: "299759554723",
    appId: "1:299759554723:web:75490f7610e9b3a0fcaf16"
};

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
// initailize database

const db = firebaseApp.firestore();
// const db = getFirestore(firebaseApp)
// initializw firebae Auth
const auth = firebase.auth();

export { db, auth };
