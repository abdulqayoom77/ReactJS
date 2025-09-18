import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import UserProfile from "./components/UserProfile";
import LoginButton from "./components/LoginButton";

const App = () => {
  const { isloggedIn } = useContext(AuthContext);

  return <>{isloggedIn ? <UserProfile /> : <LoginButton />}</>;
};

export default App;
