import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/register`,
        inputs
      );
      toast.success("Registration successfully completed.Login into your account to continue")
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
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
          Sign up for an account
        </h2>
        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label htmlFor="name" className="sr-only">
              Username
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="relative block w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-gray-100 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
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
              name="password"
              type="password"
              className="relative block w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-gray-100 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white transition duration-300 bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              Sign Up
            </button>
          </div>
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline">
              Sign in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
