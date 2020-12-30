import React from "react";

const Task = ({ task }) => {
  return (
    <div className="task">
      <div></div>
      <div>{task.description}</div>
      <div className={`${task.priority}`}>{task.priority} Priority</div>
      <div>Delete</div>
    </div>
  );
};
export default Task;
