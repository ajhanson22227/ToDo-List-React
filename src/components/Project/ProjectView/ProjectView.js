import React, { useEffect, useState } from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import { fetchProject } from "../../../api/fetchCalls";

const ProjectView = () => {
  const [busy, setBusy] = useState(true);
  const { id } = useParams();
  let { url } = useRouteMatch();
  const project = useProject(id, setBusy);
  return busy ? (
    <p>No Bueno</p>
  ) : (
    <div>
      <p>{project.title}</p> <p>{project.description}</p>
      <p>
        {project.tasks.length} Tasks <Link to={`${url}/task/create`}>Add</Link>
      </p>
    </div>
  );
};

const useProject = (id, setBusy) => {
  const [project, setProject] = useState(null);
  useEffect(() => {
    const fetchProjectAPI = async () => {
      await fetchProject(id).then((response) => {
        setBusy(true);
        setProject(response);
        setBusy(false);
      });
    };
    fetchProjectAPI();
  }, [id, setBusy]);
  return project;
};

export default ProjectView;
