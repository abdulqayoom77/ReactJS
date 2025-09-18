import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const UserProfile = () => {
  const { isloggedIn, loggedOut } = useContext(AuthContext);

  return isloggedIn ? (
    <div>
      <h2>Welcome User</h2>
      <button
        className="cursor-pointer px-4 py-2 bg-black rounded-md text-white"
        onClick={loggedOut}
      >
        Logout
      </button>
    </div>
  ) : (
    <>
      <h2>Please log in</h2>
    </>
  );
};

export default UserProfile;
