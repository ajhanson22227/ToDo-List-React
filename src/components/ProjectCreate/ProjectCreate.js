import React, { useState } from "react";
import { createProject } from "../../api/fetchCalls";

const ProjectCreate = ({ user, setProjects }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const project = {
      title: title,
      description: description,
    };
    const newProject = await Promise.resolve(createProject(project, user));
    console.log(newProject);
  };

  return (
    <div>
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
  );
};

export default ProjectCreate;
