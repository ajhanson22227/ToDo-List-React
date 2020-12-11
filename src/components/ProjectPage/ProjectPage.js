import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProjects } from "../../api/fetchCalls";

const ProjectPage = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const projects = useProjects(user, setLoading);
  return (
    <div>
      {loading ? (
        <p>is loading, hold on</p>
      ) : (
        <div>
          <p>Hello {user.username}</p>
          <p>You have {projects ? projects.length : 0} projects</p>

          <Link to={`/project/create`}>Create New Project</Link>
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
  }, []);
  return project;
};

export default ProjectPage;
