// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseConfig";
import { useRole } from "../hooks/useRole";

export default function ProtectedRoute({ children, allowedRole }) {
  const [user, loading] = useAuthState(auth);
  const role = useRole();

  if (loading || role === null) return <div>Chargement...</div>;

  if (!user) return <Navigate to="/login" />;

  if (allowedRole && role !== allowedRole) {
    return <Navigate to="/login" />;
  }

  return children;
}
