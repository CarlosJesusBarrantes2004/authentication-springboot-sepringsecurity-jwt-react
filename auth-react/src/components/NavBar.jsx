import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";

const NavBar = () => {
  const { logged, logout, setRoles } = useContext(Context);

  return (
    <nav className="flex justify-between">
      <h1>
        <Link to={"/index"} className="text-white text-2xl font-bold">
          LOGO
        </Link>
      </h1>
      {!logged ? (
        <div>
          <Link to={"/login"} className="text-white text-sm font-bold mr-3">
            Login
          </Link>
          <Link to={"/register"} className="text-white text-sm font-bold">
            Register
          </Link>
        </div>
      ) : (
        <div>
          <Link to={"/edit-user"} className="text-white text-sm font-bold mr-3">
            Edit
          </Link>
          <button
            className="text-white text-sm font-bold"
            onClick={() => {
              setRoles([]);
              logout();
            }}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
