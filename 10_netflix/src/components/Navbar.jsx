import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logOut } = UserAuth();
  // console.log(user);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4 ">Account</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4 ">Sign In</button>
          </Link>

          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sing Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
