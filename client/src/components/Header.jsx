import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { authActions } from "../store";
axios.defaults.withCredentials = true;

const Header = () => {
  const isLogged = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/logout`, {
          withCredentials: true,
        });
        if (response.data.success) {
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
        dispatch(authActions.logout());
      } catch (error) {
        toast.error("Unable to log out");
      }
    }
  };

  return (
    <header className="flex items-center justify-between p-5 text-white bg-black">
      <Link to="/" className="text-2xl">
        Authentication
      </Link>
      <div className="flex items-center gap-10">
        {isLogged ? (
          <button
            onClick={handleLogout}
            className="px-3 py-2 bg-gray-500 rounded-md hover:bg-red-500"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="px-3 py-2 bg-gray-500 rounded-md hover:bg-red-500"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="transition duration-200 border-b-2 hover:text-blue-600 hover:border-b-blue-600"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
