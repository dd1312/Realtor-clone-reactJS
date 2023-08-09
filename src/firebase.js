import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCeCMsqXRxGQAeQvzsPvUdSADbEGkkNwyM",
  authDomain: "realtor-clone-01.firebaseapp.com",
  projectId: "realtor-clone-01",
  storageBucket: "realtor-clone-01.appspot.com",
  messagingSenderId: "974228959114",
  appId: "1:974228959114:web:8d475e6d3fb3b15d296273"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db=getFirestore()