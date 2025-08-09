import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD64MasMcmaDBtOLZ_M1mqy5ISaIR7bs4Q",
  authDomain: "nexo-projeto-tcc.firebaseapp.com",
  projectId: "nexo-projeto-tcc",
  storageBucket: "nexo-projeto-tcc.firebasestorage.app",
  messagingSenderId: "957820597362",
  appId: "1:957820597362:web:111cddc8d93938d517feeb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);