import React from 'react';

const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="bg-white p-4 mb-4 rounded-md shadow-md hover:bg-gray-100 transition">
      <h3 className="text-xl font-semibold">{task.title}</h3>
      <p className="text-gray-600 mb-2">{task.description}</p>
      <button 
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
