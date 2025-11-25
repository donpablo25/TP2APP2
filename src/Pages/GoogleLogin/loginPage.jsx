import { loginWithGoogle } from "../firebase/auth";
import { getUserRole } from "../firebase/roles";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  async function handleLogin() {
    const user = await loginWithGoogle();
    const role = await getUserRole(user.uid);

    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/teacher/dashboard");
    }
  }

  return (
    <div className="login-container">
      <h1>Portail des Plans de Cours</h1>
      <button onClick={handleLogin}>
        Se connecter avec Google
      </button>
    </div>
  );
}
