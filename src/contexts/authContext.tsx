import { createContext } from "react";

export const AuthContext: any = createContext({});

export const AuthProvider = ({ children, navigate }: any) => {
  const token = localStorage.getItem("@TOKEN");
  return (
    <AuthContext.Provider value={{ token, navigate }}>
      {children}
    </AuthContext.Provider>
  );
};
