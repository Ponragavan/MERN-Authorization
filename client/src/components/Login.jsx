import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
axios.defaults.withCredentials = true;

const Login = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/login`,inputs);
      navigate('/');
      dispatch(authActions.login());
      toast.success("User logged in successfully")
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-600">
      <div className="w-full max-w-md p-8 mx-4 bg-white rounded-lg shadow-lg md:mx-auto">
        <h2 className="mb-8 text-3xl font-extrabold text-center text-gray-900">
          Sign in to your account
        </h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="text"
              className="relative block w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-gray-100 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email address"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="relative block w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-gray-100 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white transition duration-300 bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              Sign in
            </button>
          </div>
          <p className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-indigo-600 hover:underline">
              Sign up here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
