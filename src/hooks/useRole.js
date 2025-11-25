// src/hooks/useRole.js
import { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore";

export function useRole() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (!auth.currentUser) return;

    const ref = doc(db, "users", auth.currentUser.uid);
    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        setRole(snap.data().role);
      }
    });

    return () => unsub();
  }, [auth.currentUser]);

  return role;
}
