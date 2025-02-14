import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import RedirectOnLogged from "./utils/RedirectOnLogged";
import AddQuizze from "./pages/AddQuizze";
import UpdateQuizze from "./pages/UpdateQuizze";

export default function App() {
  return (
    <Routes>
      <Route element={<RedirectOnLogged />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-quizze" element={<AddQuizze />} />
        <Route path="/update/:id" element={<UpdateQuizze />} />
      </Route>
    </Routes>
  );
}
