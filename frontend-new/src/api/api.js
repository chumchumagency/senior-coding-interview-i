const BASE_URL = process.env.REACT_APP_API_URL;
const API_URL = `${BASE_URL}/api`;

const register = async (credentials) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  if (!response.ok) {
    console.log("Error Message :", data?.message)
  }
  return data;
};

const login = async (credentials) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  localStorage.setItem('token', data?.token);

  if (!response.ok) {
    console.log("Error Message :", data?.message)
  }
  return data;
};

const createTask = async (task) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  if (!response.ok) {
    console.log("Error Message :", data?.message)
  }
  return data;
};

const getTasks = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  if (!response.ok) {
    console.log("Error Message :", data?.message)
  }
  return data;
};

const api = {
  login,
  register,
  createTask,
  getTasks,
};

export default api;
