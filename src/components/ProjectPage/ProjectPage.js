import React, { useEffect, useState } from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import { fetchProjects } from "../../api/fetchCalls";
import ProjectCreate from "../ProjectCreate/ProjectCreate";

const ProjectPage = ({ user }) => {
  let { path } = useRouteMatch();
  console.log(path);
  return (
    <div>
      {/* <p>{projects ? projects.length : null} </p> */}
      <p>World</p>
      <p>or should I say.. Hello {user.username}</p>
      <Link to={`/create`}>Create New Project</Link>

      <Route path="/create" component={() => <ProjectCreate user={user} />} />
    </div>
  );
};

export default ProjectPage;
