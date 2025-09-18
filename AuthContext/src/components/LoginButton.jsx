import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginButton = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <button
      className="cursor-pointer px-4 py-2 bg-black rounded-md text-white"
      onClick={loggedIn}
    >
      Login
    </button>
  );
};

export default LoginButton;