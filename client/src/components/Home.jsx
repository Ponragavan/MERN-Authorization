import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
axios.defaults.withCredentials = true;

const Home = () => {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.isLoggedIn);
  const [isLoading, setIsLoading] = useState(false);

  const getUser = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user`, {
        withCredentials: true,
      });
      dispatch(authActions.login());
      const user = response.data.user;
      setIsLoading(false);
      return user;
    } catch (error) {
      setIsLoading(false);
      console.log("Login error: " + error);
    }
  };

  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, [isLogged]);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex items-center justify-center flex-grow bg-gray-100">
        {isLoading ? (
          <span className="w-10 h-10 border-4 border-gray-300 rounded-full border-r-gray-600 animate-spin"></span>
        ) : (
          <div className="w-full max-w-sm p-8 text-center bg-white rounded shadow-md">
            {user ? (
              <>
                <h1 className="mb-4 text-2xl font-bold">{user.name}</h1>
                <h1 className="text-lg text-gray-700">{user.email}</h1>
              </>
            ) : (
              <p className="text-gray-600">Login first to see your details.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
