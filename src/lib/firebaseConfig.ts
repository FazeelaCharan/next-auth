


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYzH9Au9WZ2RsBdcCUm4TG-Wo518l6Rts",
  authDomain: "next-auth-d7596.firebaseapp.com",
  projectId: "next-auth-d7596",
  storageBucket: "next-auth-d7596.firebasestorage.app",
  messagingSenderId: "740616903820",
  appId: "1:740616903820:web:d89b4eb83d4207ba2cafa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };