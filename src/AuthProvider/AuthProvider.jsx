import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const googleLogin = () => {
        return signInWithPopup(auth, provider);
    }

    const logout = () => {
        signOut(auth)
        .then(result => {
            setUser(null)
        })
        .catch(err => {
            const error = err.message;
        })
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, 
            (loggedInUser => {
                setUser(loggedInUser);
            }));
            return () => {
                unsubscribe()
            }
    },[])

    const authInfo = {
        googleLogin,
        user,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;