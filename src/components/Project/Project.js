import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

const Project = ({ project, setPDelete, setProjToDelete }) => {
  return (
    <div className="project mw700 df-row df-space-between">
      <div className="project-information">
        <p className="project-title">
          {project.title}{" "}
          <span className="project-description">{project.description}</span>
        </p>
        <p className="project-tasks">{project.tasks.length} Tasks</p>
      </div>
      <div className="df-row">
        <div className="project-link">
          <Link to={`/project/${project._id}`}>View</Link>
        </div>
        <div className="project-link">
          <p
            href="#"
            className="project-link"
            onClick={() => {
              setPDelete(true);
              setProjToDelete(project);
            }}
          >
            Delete
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
