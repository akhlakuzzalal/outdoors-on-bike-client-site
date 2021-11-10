import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initFirebase = () => {
   initializeApp(firebaseConfig);
}

export default initFirebase;