import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { DashboardPage } from "./pages/dashboardPage/dashboard";
import { LoginPage } from "./pages/loginPage/loginPage";
import { RegisterPage } from "./pages/registerPage/registerPage";

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
