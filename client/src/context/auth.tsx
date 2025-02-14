import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useNavigate } from "react-router";

interface AuthContextType {
  isAuthenticated: boolean;
  userId: string | null;
  login: (id: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(
    localStorage.getItem("userId")
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      localStorage.setItem("userId", userId);
    } else {
      localStorage.removeItem("userId");
    }
  }, [userId]);

  const login = (id: string) => {
    setUserId(id);
    navigate("/dashboard");
  };

  const logout = () => {
    setUserId(null);
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!userId, userId, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
