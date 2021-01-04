import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createProject } from "../../../api/fetchCalls";

const ProjectCreate = ({ user, setPCreate }) => {
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const project = {
      title: title,
      description: description,
    };
    await Promise.resolve(createProject(project, user));
    setPCreate(false);
    setTimeout(() => history.push("/project"), 1000);
  };

  return (
    <div className="create-modal">
      <div className="create-modal-content">
        <div className="create-modal-exit" onClick={() => setPCreate(false)}>
          X
        </div>
        <div className="create-modal-title">Create New Project</div>
        <form onSubmit={handleSubmit}>
          <label className="sign-in-form-text">Title</label>
          <br />
          <input
            className="create-modal-input"
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />

          <br />
          <label className="sign-in-form-text">Description </label>
          <br />
          <input
            className="create-modal-input"
            type="text"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />

          <br />
          <input className="create-modal-submit" type="submit" value="Create" />
        </form>
      </div>
    </div>
  );
};

export default ProjectCreate;
