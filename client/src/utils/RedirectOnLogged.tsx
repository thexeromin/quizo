import { useAuth } from "@/context/auth";
import { Outlet, Navigate } from "react-router";

export default function RedirectOnLogged() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
}
