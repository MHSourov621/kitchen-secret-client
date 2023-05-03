import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
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
        logout,
        githubLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;