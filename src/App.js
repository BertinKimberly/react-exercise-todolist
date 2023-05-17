import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuid(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <div className="container-fluid d-flex bg-dark h-100% align-items-center justify-content-center">
        <div className="container  m-3 bg-secondary d-flex flex-column align-items-center justify-content-center vh-100 ">
          <input
            className="w-50 p-2 m-3"
            placeholder="Add Task "
            ref={todoNameRef}
            type="text"
          />
          <button
            className="btn btn-outline-success m-3"
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
          <button
            className="btn btn-outline-warning m-3"
            onClick={handleClearTodos}
          >
            Clear Complete
          </button>
          <div className="fw-bold text-color-white">
            {todos.filter((todo) => !todo.complete).length} left to do
          </div>
          <div className="bg-secondary  container d-flex flex-column justify-content-center">
            <h1>My tasks today</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
