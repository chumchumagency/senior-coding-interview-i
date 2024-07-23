import { useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TaskPage from './pages/TaskPage';
import api from './api/api';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
   console.log('token========',token);
  const login = async (credentials) => {
    try {
      const response = await api.login(credentials);
      console.log('response',response)
      setToken(response.token);
      localStorage.setItem('token', response.token); // Store token in localStorage
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage login={login} />,
    },
    {
      path: '/login',
      element: <LoginPage login={login} />,
    },
    {
      path: '/tasks',
      element: token ? <TaskPage api={api} token={token} /> : <LoginPage login={login} />, // Ensure user is redirected to login if not authenticated
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

