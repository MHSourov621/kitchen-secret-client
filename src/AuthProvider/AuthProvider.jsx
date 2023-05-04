import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const emailRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true);
        signOut(auth)
        .then(result => {
            setUser(null)
        })
        .catch(err => {
            const error = err.message;
        })
    }

    const profile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name , photoURL: image
        })
    }


    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, 
            (loggedInUser => {
                setUser(loggedInUser);
                setLoading(false)
            }));
            return () => {
                unsubscribe()
            }
    },[])

    const authInfo = {
        googleLogin,
        user,
        logout,
        githubLogin,
        emailRegister,
        emailLogin,
        profile,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;