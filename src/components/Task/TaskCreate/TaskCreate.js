import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createTask } from "../../../api/fetchCalls";

const TaskCreate = ({ projid, setTCreate }) => {
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
    <div className="create-modal">
      <div className="create-modal-content">
        <div className="create-modal-exit" onClick={() => setTCreate(false)}>
          X
        </div>
        <div className="create-modal-title">Create New Task</div>
        <form onSubmit={handleSubmit}>
          <label className="sign-in-form-text">Description</label>
          <br />
          <input
            className="create-modal-input"
            type="text"
            name="description"
            value={description}
            onChange={handleDescription}
          />

          <br />
          <label onChange={handlePriority}>
            <div className="priority-label">Priority</div>
            <br />
            <label className="create-modal-radio-label">
              <input
                className="create-modal-radio"
                type="radio"
                name="priority"
                value="Low"
              />
              Low
            </label>
            <label className="create-modal-radio-label">
              <input
                className="create-modal-radio"
                type="radio"
                name="priority"
                value="Medium"
              />
              Medium
            </label>
            <label className="create-modal-radio-label">
              <input
                className="create-modal-radio"
                type="radio"
                name="priority"
                value="High"
              />
              High
            </label>
          </label>
          <br />
          <input
            className="create-modal-submit button task-create-submit"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default TaskCreate;
