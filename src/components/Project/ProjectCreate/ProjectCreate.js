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
    <div className="delete-modal">
      <div className="delete-modal-content">
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <br />
            <input
              type="text"
              onChange={(event) => setTitle(event.target.value)}
              value={title}
            />
          </label>
          <br />
          <label>
            Description
            <br />
            <input
              type="text"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
            />
          </label>
          <br />
          <input type="submit" value="Create" />
        </form>
      </div>
    </div>
  );
};

export default ProjectCreate;
