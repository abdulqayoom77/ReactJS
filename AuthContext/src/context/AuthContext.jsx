import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const loggedIn = () => {
    setIsLoggedIn(!isloggedIn);
  };
  const loggedOut = () => {
    setIsLoggedIn(!isloggedIn);
  };

  return (
    <AuthContext.Provider
      value={{ isloggedIn, setIsLoggedIn, loggedIn, loggedOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
