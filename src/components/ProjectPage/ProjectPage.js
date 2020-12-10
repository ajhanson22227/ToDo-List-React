import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProjects } from "../../api/fetchCalls";

const ProjectPage = ({ user }) => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const getProjects = async () =>
      setProjects(await Promise.resolve(fetchProjects(user)));
    getProjects();
  }, [user]);

  console.log(projects);

  return (
    <div>
      <p>{projects !== null ? projects.length : null} </p>
      <p>World</p>
      <p>or should I say.. Hello {user.username}</p>
      <Link to="/project/create">Create New Project</Link>
    </div>
  );
};

export default ProjectPage;
