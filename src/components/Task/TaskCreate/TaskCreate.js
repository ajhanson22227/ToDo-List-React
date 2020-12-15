import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { createTask } from "../../../api/fetchCalls";

const TaskCreate = () => {
  const { projid } = useParams();
  let history = useHistory();
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handlePriority = (event) => {
    setPriority(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const task = {
      description: description,
      priority: priority,
      project: projid,
    };
    await Promise.resolve(createTask(task));
    setTimeout(() => history.push(`/project/${projid}`), 1000);
  };

  return (
    <div>
      <p>Create a Task</p>
      <form onSubmit={handleSubmit}>
        <label>
          Description
          <br />
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleDescription}
          />
        </label>
        <br />
        <label onChange={handlePriority}>
          Priority
          <br />
          <label>
            <input type="radio" name="priority" value="Low" />
            Low
          </label>
          <label>
            <input type="radio" name="priority" value="Medium" />
            Medium
          </label>
          <label>
            <input type="radio" name="priority" value="High" />
            High
          </label>
        </label>
        <br />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default TaskCreate;
