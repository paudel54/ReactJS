import { Children, createContext, useContext, useEffect, useState } from "react";
import { auth } from '../components/firebase';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";


// creating a context system to bypass a prop

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});
    // login to signUP

    function signUP(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // logic login
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logic logout
    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ signUP, logIn, logOut, user }}>
            {Children}
        </AuthContext.Provider>
    );
}

// custom hook to export userAuth
export function UserAuth() {
    return useContext(AuthContext);
}