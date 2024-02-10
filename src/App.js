import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/tasks');
    setTasks(response.data);
  };

  const addTask = async (task) => {
    await axios.post('http://localhost:5000/tasks', task);
    fetchTasks();
  };

  const toggleDone = async (id) => {
    let task = tasks.find((task) => task.id === id);
    await axios.patch(`http://localhost:5000/tasks/${id}`, { done: !task.done });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center pt-8">
      <div className="mb-4 text-2xl font-bold">To Do List</div>
      <TaskForm addTask={addTask} />
      { }
      <TaskList tasks={tasks} toggleDone={toggleDone} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
