import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";




// initialize app
initializeFirebase();


const useFirebase = () => {

    const auth = getAuth();
    // get user
    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    // handle google sign in 
    const googleSignIn = () => {
        // google provider
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider);

    }

    // create email user 
    const createUserWithEmail = (mail, password) => {
        // create user
       return createUserWithEmailAndPassword(auth, mail, password)
            // .then((userCredential) => {
            //     // Signed in 
            //     setUser(userCredential.user);
            //     setUserName(userName);
            //     // console.log(user);

            // })
            // .catch((error) => {
            //     const errorMessage = error.message;
            //     setError(errorMessage);

            // });


    }

    // set user name 
    const setUserName = (userName) => {

        // add display name

        updateProfile(auth.currentUser, { displayName: userName })
            .then(() => {
                // Profile updated!
                // ...
            })
            .catch(error => {
                setError(error.message);
            })
    }


    // login user with email
    const loginUserWithEmail = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
            
    }



    // on auth state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);

            } else {

            }
        });
    }, []);

    // handle log out
    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
            setError(error);
        });
    }

    return {
        user,
        error,
        googleSignIn,
        createUserWithEmail,
        setUserName,
        loginUserWithEmail,
        handleLogOut
    }


}

export default useFirebase;