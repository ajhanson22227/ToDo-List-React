import React from "react";

const Task = ({ task }) => {
  return (
    <div>
      <p>{task.description}</p>
      <p>{task.priority} Priority</p>
    </div>
  );
};
export default Task;
