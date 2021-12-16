import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

import firebaseInitialize from "../Components/Firebase/firebaseinit";

firebaseInitialize();
const useFirebase = () => {
    const auth = getAuth();

    const [user,setUser]=useState([]);
    const [error,setError]=useState('')
    const [isLoading,setIsLoading]=useState(true)

// Email with Registration Authentication Section
    const emailRegistration = (email,password,name,navigate) => {
        createUserWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
            setError("");
        })
        .catch((error) => {
          setError(error.message);
       }) ;
       navigate('/');
    }
// Email with Login Authentication Section

    const emailLogin=(email, password,location,navigate)=>{
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                 setUser(userCredential.email);
                 const destination=location?.state?.from || '/';
                 navigate(destination);
                 setError("")
            })
            .catch((error) => { 
                setError(error.message);
            });
    }

    // Google with Login Authentication Section

    const googleLogin=(location,navigate)=>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user)
            const destination=location?.state?.from || '/';
            navigate(destination)
        }).catch((error) => {
            setError(error.message);
        });
            }



 //onAuthStateChange Authentication section

        useEffect(()=>{
            onAuthStateChanged(auth, (user) => {
                if (user) {
                setUser(user)
                } else {
                setUser({})
                }
            });
        },[])


 //Logout Authentication section

        const logOut=()=>{
            signOut(auth).then(() => {
               setUser({})
              }).catch((error) => {
                  setError(error.message)
              });
        }



    return{
        user,
        error,
        logOut,
        googleLogin,
        emailLogin,
        emailRegistration,
    }
}
export default useFirebase;