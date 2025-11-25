// src/firebase/roles.js
import { db } from "./firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export async function getUserRole(uid) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  return snap.data().role;
}
