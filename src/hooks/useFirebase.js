import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from './../Components/Login/Firebase/firebase.init';


initializeFirebase()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();

    const [authError, setAuthError] = useState('')
    // const [admin, setAdmin] = useState(false)
    const googleProvider = new GoogleAuthProvider();
    // const [token, setToken] = useState('')



    // register user 
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError("")
                const newUser = { email, displayName: name }
                setUser(newUser)
                // save user to the database
                // saveUser(email, name, 'POST')
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/')
            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => (false));
    }


    // log in user 
    const logInUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
                setAuthError("")

            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    const signInUsingGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
                const user = result.user;
                // saveUser(user.email, user.displayName, "PUT")
                setAuthError("")
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])





    return {
        auth,
        user,
        isLoading,
        setError,
        registerUser,
        authError,
        logInUser,
        error,
        setUser,
        signInUsingGoogle,
        logOut

    }

}
export default useFirebase;