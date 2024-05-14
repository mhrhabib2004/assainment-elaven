import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";





export const AuthContext = createContext(null);


const AuthProvaider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,

        })


    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const logOut = () => {
        setLoading(false);
        return signOut(auth);
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, crrentUser => {
           
            console.log('user in the auth state changed', crrentUser);
            setUser(crrentUser);
            setLoading(false);


        });
        return () => {
            unsubscribe();

        }
    }, [])







    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        provider,
        gitProvider,
        updateUserProfile





    }
    return (
        <AuthContext.Provider value={authInfo}>

            {children}


        </AuthContext.Provider >
    );
};

export default AuthProvaider;