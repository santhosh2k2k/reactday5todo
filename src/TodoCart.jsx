import React, { useState } from 'react';

const TodoCard = ({ index, todo, editTodo, deleteTodo, updateStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);
  const [newDescription, setNewDescription] = useState(todo.description);
  const [newStatus, setNewStatus] = useState(todo.status);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(index, { task: newTask, description: newDescription, status: newStatus });
    setIsEditing(false);
  };

  return (
    <div className="todo-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h2>{todo.task}</h2>
          <p>{todo.description}</p>
          <span>Status: {todo.status}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTodo(index)}>Delete</button>
          <select
            value={todo.status}
            onChange={(e) => updateStatus(index, e.target.value)}
          >
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
        </>
      )}
    </div>
  );
};

export default TodoCard;
