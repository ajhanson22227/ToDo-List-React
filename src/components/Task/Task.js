import React from "react";

const Task = ({ task }) => {
  return (
    <div>
      <p>{task.description}</p>
      <p className={`${task.priority}`}>{task.priority} Priority</p>
    </div>
  );
};
export default Task;
