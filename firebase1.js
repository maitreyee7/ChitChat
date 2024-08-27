import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

//ADD YOU FIREBASE WEB URL IN THE MISSING FIELDS

const firebaseConfig = {
  apiKey:"",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth()
export const db= getFirestore()
export const storage= getStorage()  