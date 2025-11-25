
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAYbF7F1FiUEmza9CTWp39gzLUWXRSJNsM",
  authDomain: "projettest1-b35df.firebaseapp.com",
  projectId: "projettest1-b35df",
  storageBucket: "projettest1-b35df.firebasestorage.app",
  messagingSenderId: "884342503193",
  appId: "1:884342503193:web:9ca76a0e383981fd6cf788"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
