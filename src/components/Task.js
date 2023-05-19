import React, { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

const Task = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(props.taskName);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    if (typeof props.saveTask === "function") {
      props.saveTask(props.id, editedTaskName);
    }
    setEditMode(false);
  };

  const handleCancelClick = () => {
    setEditedTaskName(props.taskName);
    setEditMode(false);
  };

  const handleTaskNameChange = (event) => {
    setEditedTaskName(event.target.value);
  };

  return (
    <div className="task">
      <div className="p-1 m-3 bg-light d-flex justify-content-between task-content">
        {editMode ? (
          <input
            type="text"
            value={editedTaskName}
            onChange={handleTaskNameChange}
          />
        ) : (
          <p className={props.completed ? "completed" : ""}>{props.taskName}</p>
        )}
        <div className="icons">
          <FaCheck
            className="icon"
            onClick={() => props.completeTask(props.id)}
          />
          <FaTrash
            className="icon"
            onClick={() => props.deleteTask(props.id)}
          />
          {editMode ? (
            <>
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </>
          ) : (
            <button onClick={handleEditClick}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
