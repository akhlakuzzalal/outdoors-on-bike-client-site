import initFirebase from "./firebase.init";
import {
   getAuth, onAuthStateChanged, signInWithPopup,
   GoogleAuthProvider, signOut, signInWithEmailAndPassword,
   createUserWithEmailAndPassword
} from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = () => {
   initFirebase();
   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState({});

   const provider = new GoogleAuthProvider();
   const auth = getAuth();

   const SignInWithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, provider)

   };

   const registerWithEmailPass = (email, password) => {
      setLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
         })
         .catch((error) => {
         })
         .finally(() => setLoading(false));
   }

   const logInWithEmailPass = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   const logOut = () => {
      setLoading(true)
      signOut(auth)
         .then(() => setUser({}))
         .catch(error => console.log(error.message))
         .finally(() => setLoading(false))
   };

   useEffect(() => {
      setLoading(true)
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user);
         }
         else {
            setUser({})
         }
         setLoading(false);
      });
      return unsubscribe;
   }, [auth])

   return {
      logOut,
      SignInWithGoogle,
      logInWithEmailPass,
      registerWithEmailPass,
      user,
      setUser,
      setLoading,
      loading
   };
};

export default useFirebase;