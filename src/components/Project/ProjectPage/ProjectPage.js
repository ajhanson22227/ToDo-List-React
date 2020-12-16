import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProjects } from "../../../api/fetchCalls";
import Project from "../Project";

const ProjectPage = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const projects = useProjects(user, setLoading);
  return (
    <div>
      <div className="top-bar">
        <p>Too-Doo</p>
      </div>
      {loading ? (
        <p>is loading, hold on</p>
      ) : (
        <div className="project-page-container">
          <div className="header">
            <div className="user-info">
              <p>Hello {user.username}</p>
              <p>You have {projects ? projects.length : 0} projects</p>
            </div>
            <div className="create-project-button">
              <Link to={`/project/create`}>Create New Project</Link>
            </div>
          </div>

          <div className="project-container">{projects}</div>
        </div>
      )}
    </div>
  );
};

const useProjects = (user, setLoading) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      setProject(await Promise.resolve(fetchProjects(user)));
      setLoading(false);
    };
    getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let projectArray = [];
  for (let i in project) {
    projectArray.push(<Project project={project[i]} key={i} />);
  }

  return projectArray;
};

export default ProjectPage;
