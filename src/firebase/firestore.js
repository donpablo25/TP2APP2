// src/firebase/firestore.js
import { db } from "./firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

export async function setDocument(path, data) {
  await setDoc(doc(db, path), data, { merge: true });
}

export async function getDocument(path) {
  const snap = await getDoc(doc(db, path));
  return snap.exists() ? snap.data() : null;
}
