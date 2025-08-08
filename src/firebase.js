import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBad6x_lYy4X-U73tZEIiQfs7RJHBFOcyM",
  authDomain: "teste-celestino.firebaseapp.com",
  projectId: "teste-celestino",
  storageBucket: "teste-celestino.firebasestorage.app",
  messagingSenderId: "345080515115",
  appId: "1:345080515115:web:78a9b8a570646433d0b86e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);