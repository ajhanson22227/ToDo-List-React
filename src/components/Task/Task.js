import React from "react";
import "./Task.css";

const Task = ({ task }) => {
  return (
    <div className=" task df-row">
      <div className="section-1 df-row">
        <div className="task-checkbox"></div>
        <div>{task.description}</div>
      </div>
      <div className="section-2 df-row">
        <div className={`${task.priority} priority`}>
          {task.priority} Priority
        </div>
        <div>Delete</div>
      </div>
    </div>
  );
};
export default Task;
