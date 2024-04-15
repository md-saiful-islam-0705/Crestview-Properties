import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import userDefaultPic from "../../assets/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Optional: You can perform any additional actions after signing out, such as navigating to another page
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };


  const navLinks = (
    <>
      <li>
        <NavLink exact to="/" activeClassName="font-bold text-indigo-600">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/properties" activeClassName="font-bold text-indigo-600">
          Latest Estates
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" activeClassName="font-bold text-indigo-600">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeClassName="font-bold text-indigo-600">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="font-bold text-indigo-600">
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 flex justify-between items-center py-4 px-8">
      <div className="navbar-start">
        <div className="flex items-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-1 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <h1 className="text-5xl font-extrabold mr-2 hover:bg-gray-100 p-2 rounded-full">
              <span className="text-gradient bg-gradient-to-r from-violet-600 to-pink-500 text-transparent bg-clip-text">
                C
              </span>
              <span className="text-3xl font-extrabold text-pink-600">P</span>
            </h1>
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="User Avatar" />
                ) : (
                  <img src={userDefaultPic} alt="Default Avatar" />
                )}
              </div>
            </label>
            <button onClick={handleSignOut} className="btn btn-sm btn-outline border-none">
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
