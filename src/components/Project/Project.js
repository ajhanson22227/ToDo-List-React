import React from "react";
import "./Project.css";

const Project = ({ project }) => {
  return (
    <div className="project">
      <p className="project-title">{project.title}</p>
      <p className="project-description">{project.description}</p>
      <p className="project-tasks">{project.tasks.length} Tasks</p>
    </div>
  );
};

export default Project;
