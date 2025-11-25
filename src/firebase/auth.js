import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      role: "enseignant",   // rôle par défaut
      createdAt: Date.now()
    });
  }

  return user;
}

export function logout() {
  return signOut(auth);
}
