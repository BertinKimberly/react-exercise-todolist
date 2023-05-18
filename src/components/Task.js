import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

const Task = (props) => {
  return (
    <div className=" task">
      <div className="p-1 m-3 bg-light d-flex justify-content-between task-content">
        <p className={props.completed ? "completed" : ""}>{props.taskName}</p>
        <div className="icons">
          <FaCheck
            className="icon"
            onClick={() => props.completeTask(props.id)}
          />
          <FaTrash
            className="icon"
            onClick={() => props.deleteTask(props.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
