import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const App = () => {
  return (
    <>
      <ToastContainer position='top-center' theme='dark' autoClose={3000} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
