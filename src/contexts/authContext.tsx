import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext: any = createContext({});

export const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");
  return (
    <AuthContext.Provider value={{ token, navigate }}>
      {children}
    </AuthContext.Provider>
  );
};
