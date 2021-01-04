import React, { useState } from "react";
import "./Task.css";
import { updateTaskCompletion } from "../../api/fetchCalls";

const Task = ({ task, setTaskDelete, setTaskToDelete }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleCheck = () => {
    updateTaskCompletion(task);
  };

  return (
    <div className=" task df-row">
      <div className="section-1 df-row">
        <input
          className="task-checkbox"
          type="checkbox"
          checked={completed}
          onChange={() => {
            task.completed = !task.completed;
            setCompleted(task.completed);
            handleCheck();
          }}
        />
        <div className={`${completed ? "completed" : null} task-desc`}>
          {task.description}
        </div>
      </div>
      <div className="section-2 df-row">
        <div className={`${task.priority} priority df-row`}>
          {task.priority} Priority
        </div>
        <div
          className="project-link"
          style={{
            width: "40%",
            paddingLeft: "1em",
            textAlign: "right",
            marginRight: "0",
          }}
        >
          <p
            href="#"
            className="project-link"
            onClick={() => {
              setTaskDelete(true);
              setTaskToDelete(task);
            }}
          >
            Delete
          </p>
        </div>
      </div>
    </div>
  );
};
export default Task;
