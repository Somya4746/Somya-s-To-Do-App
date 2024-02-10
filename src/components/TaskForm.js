import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTask({ text: task, done: false, createdAt: new Date().toISOString() });
    setTask('');
  };

  return (
    <div className="flex justify-center mt-8 mb-4">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex items-center bg-gray-700 rounded-full shadow-xl">
          <input
            className="rounded-l-full w-full py-4 px-6 text-gray-300 leading-tight focus:outline-none"
            id="task"
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <div className="p-4">
            <button
              className="bg-purple-600 text-white rounded-full p-2 hover:bg-purple-700 focus:outline-none w-12 h-12 flex items-center justify-center"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
