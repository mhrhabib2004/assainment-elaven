import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import axios from "axios";





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
            const UserEmail = crrentUser?.email || user?.email;
            const loggedUser = { email: UserEmail };
            console.log('user in the auth state changed', crrentUser);
            setUser(crrentUser);
            setLoading(false);
           
 //  if user existiong token
            if (crrentUser) {
                axios.post(`${import.meta.env.VITE_LINK}/jwt`, loggedUser, { withCredentials: true } )
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
            else {
                axios.post(`${import.meta.env.VITE_LINK}/logout`, loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            }
           



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