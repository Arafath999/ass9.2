/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../FireBase/FireBase.confiq";



export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = () => {
        return signInWithPopup(auth,googleProvider);
    }

    const handleProfile = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayname:name, photoURL:photo
        })
    }

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect( () => {
       const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed',currentUser);
            setUser(currentUser)
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {user,createUser,logOut,signIn,loading,googleSignIn,handleProfile}
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;