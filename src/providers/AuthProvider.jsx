import PropTypes from "prop-types"; 
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, new GoogleAuthProvider())
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const signInWithGitHub = () => {
        signInWithPopup(auth, new GithubAuthProvider())
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [auth])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithGitHub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
