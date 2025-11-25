// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import LoginPage from "./Pages/GoogleLogin/loginPage";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import TeacherDashboard from "./Pages/teacher/TeacherDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/teacher/dashboard"
          element={
            <ProtectedRoute allowedRole="enseignant">
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
