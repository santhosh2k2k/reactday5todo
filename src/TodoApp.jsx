import React, { useState } from 'react';
import TodoCard from './TodoCard';
import TodoForm from './TodoForm';
import Filter from './Filter';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("both");

  // Create a new Todo
  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, status: "Not Completed" }]);
  };

  // Edit an existing Todo
  const editTodo = (index, updatedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodo;
    setTodos(updatedTodos);
  };

  // Delete a Todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Update status of a Todo
  const updateStatus = (index, status) => {
    const updatedTodos = [...todos];
    updatedTodos[index].status = status;
    setTodos(updatedTodos);
  };

  // Filtered Todos
  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.status === "Completed";
    if (filter === "notCompleted") return todo.status === "Not Completed";
    return true;
  });

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <div className="todo-list">
        {filteredTodos.map((todo, index) => (
          <TodoCard
            key={index}
            index={index}
            todo={todo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            updateStatus={updateStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
