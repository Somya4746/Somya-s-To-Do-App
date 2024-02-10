import React from 'react';

function TaskList({ tasks, toggleDone, deleteTask }) { 
  return (
    <div className="flex justify-center mb-4">
      <div className="w-full max-w-md">
      <ul className="bg-gray-800 rounded-xl shadow-lg">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center justify-between px-6 py-2 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <input
              className="form-checkbox h-5 w-5 text-purple-600 rounded"
              type="checkbox"
              checked={task.done}
              onChange={() => toggleDone(task.id)}
            />
            <span className={`flex-1 text-gray-300 ${task.done ? 'line-through' : ''}`}>{task.text}</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-500">{new Date(task.createdAt).toLocaleDateString()}</span>
            { }
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
      { }
    </ul>
      </div>
    </div>
  );
}

export default TaskList;
