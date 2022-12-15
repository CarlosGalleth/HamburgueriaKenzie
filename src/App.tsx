import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { DashboardPage } from "./pages/dashboardPage/dashboard";
import { LoginPage } from "./pages/loginPage/loginPage";
import { RegisterPage } from "./pages/registerPage/registerPage";

function App() {
  const navigate = useNavigate();
  return (
    <AuthProvider navigate={navigate}>
      <Routes>
        <Route path="/" element={<LoginPage navigate={navigate} />} />
        <Route
          path="/register"
          element={<RegisterPage navigate={navigate} />}
        />
        <Route
          path="/dashboard"
          element={<DashboardPage navigate={navigate} />}
        >
          <Route path=":name" element={<DashboardPage navigate={navigate} />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
