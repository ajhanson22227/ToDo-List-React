import React from "react";
import "./Task.css";

const Task = ({ task, setTaskDelete, setTaskToDelete }) => {
  return (
    <div className=" task df-row">
      <div className="section-1 df-row">
        <div className="task-checkbox"></div>
        <div>{task.description}</div>
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
