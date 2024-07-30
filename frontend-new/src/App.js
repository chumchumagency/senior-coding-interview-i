import React, { useEffect, useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TaskPage from './pages/TaskPage';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: token ? <Navigate to="/tasks" /> : <LoginPage />,
    },
    {
      path: '/login',
      element: token ? <Navigate to="/tasks" /> : <LoginPage />,
    },
    {
      path: '/register',
      element: token ? <Navigate to="/tasks" /> : <RegisterPage />,
    },
    {
      path: '/tasks',
      element: token ? <TaskPage /> : <Navigate to="/login" />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
