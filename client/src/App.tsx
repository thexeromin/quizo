import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import RedirectOnLogged from "./utils/RedirectOnLogged";

export default function App() {
  return (
    <Routes>
      <Route element={<RedirectOnLogged />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
