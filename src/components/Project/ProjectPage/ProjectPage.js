import React, { useEffect, useState } from "react";
import { fetchProjects } from "../../../api/fetchCalls";
import Project from "../Project";
import ProjectDelete from "../ProjectDelete/ProjectDelete";
import ProjectCreate from "../ProjectCreate/ProjectCreate";

const ProjectPage = ({ user }) => {
  const [loading, setLoading] = useState(false);
  //states to determine project deletion
  const [pdelete, setPDelete] = useState(false);
  const [projToDelete, setProjToDelete] = useState(null);
  //states to determine project creation
  const [pcreate, setPCreate] = useState(false);
  const projects = useProjects(user, setLoading, setPDelete, setProjToDelete);

  const handleProjectCreate = () => {
    setPCreate(true);
  };

  return (
    <div>
      {loading ? (
        <p>is loading, hold on</p>
      ) : (
        <div className="df-col">
          <div className="header mw700 df-row df-space-between">
            <div className="user-info">
              <p className="welcome-text">Hello {user.username}!</p>
              <p className="project-number">
                You have {projects ? projects.length : 0} project(s)
              </p>
            </div>
            <div
              className="create-project-button"
              onClick={handleProjectCreate}
            >
              <p>Create New Project</p>
            </div>
          </div>
          {pdelete ? (
            <ProjectDelete
              projToDelete={projToDelete}
              setPDelete={setPDelete}
            />
          ) : null}

          {pcreate ? (
            <ProjectCreate user={user} setPCreate={setPCreate} />
          ) : null}

          <div className="df-col">{projects}</div>
        </div>
      )}
    </div>
  );
};

const useProjects = (user, setLoading, setPDelete, setProjToDelete) => {
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
    projectArray.push(
      <Project
        project={project[i]}
        setPDelete={setPDelete}
        setProjToDelete={setProjToDelete}
        key={i}
      />
    );
  }

  return projectArray;
};

export default ProjectPage;
