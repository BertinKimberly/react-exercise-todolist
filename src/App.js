import React, { useState } from "react";
import Task from "./components/Task";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      taskName: taskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const completeTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div className="main-container">
      <h1 className="text-center m-5">Welcome , Bertin</h1>
      <div className="container bg-secondary m-5 p-5">
        <form onSubmit={addTask} className="w-100">
          <div>
            <input type="text" value={taskInput} onChange={handleInputChange} />
            <button type="submit" className="add-btn">
              Add a task
            </button>
          </div>
        </form>
      </div>
      <div>
        <h2>My tasks</h2>
        <div className=" container">
          {tasks.length !== 0 ? (
            tasks.map((task) => (
              <Task
                taskName={task.taskName}
                key={task.id}
                id={task.id}
                completed={task.completed}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            ))
          ) : (
            <p className=" m-2">Empty...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
