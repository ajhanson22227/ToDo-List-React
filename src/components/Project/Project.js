import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="project-information">
        <p className="project-title">{project.title}</p>
        <p className="project-description">{project.description}</p>
        <p className="project-tasks">{project.tasks.length} Tasks</p>
      </div>
      <div className="project-link">
        <Link to={`/project/${project._id}/view`}>View</Link>
      </div>
      <div className="project-link">
        <Link to={`/project/${project._id}/delete`}>Delete</Link>
      </div>
    </div>
  );
};

export default Project;
