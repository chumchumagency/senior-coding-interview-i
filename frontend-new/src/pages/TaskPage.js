import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import api from '../api/api';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await api.getTasks();
      setTasks(response);
    };
    fetchTasks();
  }, [api]);
   
  const addNewTask = async (data) => {
    const response = await api.createTask(data)
    setTasks([...tasks, response]);
  }

  return (
    <div>
      <TaskForm addNewTask={addNewTask}/>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskPage;
