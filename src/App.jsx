import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";

function App() {
  return (
    <Router>
      <Routes>

        {/* Page Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboards */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />

        {/* Par défaut → login */}
        <Route path="*" element={<LoginPage />} />

      </Routes>
    </Router>
  );
}

export default App;
