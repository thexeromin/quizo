import { useAuth } from "@/context/auth";
import { Outlet, Navigate } from "react-router";

export default function ProtectedRoutes() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
