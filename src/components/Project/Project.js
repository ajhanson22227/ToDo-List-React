import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="project-information">
        <p className="project-title">
          {project.title}{" "}
          <span className="project-description">{project.description}</span>
        </p>
        <p className="project-tasks">{project.tasks.length} Tasks</p>
      </div>
      <div className="project-links-container">
        <div className="project-link">
          <Link to={`/project/${project._id}`}>View</Link>
        </div>
        <div className="project-link">
          <Link to={`/project/${project._id}/delete`}>Delete</Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
