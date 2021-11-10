import initFirebase from "./firebase.init";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = () => {
   initFirebase();
   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState({});

   const provider = new GoogleAuthProvider();
   const auth = getAuth();

   const SignInWithGoogle = () => {
      setLoading(true)
      signInWithPopup(auth, provider)
         .catch(error => console.log(error.message))
         .finally(() => setLoading(false))
   };

   const logOut = () => {
      setLoading(true)
      signOut(auth)
         .then(() => { setUser({}) })
         .catch(error => console.log(error.message))
         .finally(() => setLoading(false))
   };

   useEffect(() => {
      setLoading(true)
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user)
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
      user,
      setUser,
      setLoading,
      loading
   };
};

export default useFirebase;