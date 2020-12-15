import React, { useEffect, useState } from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import { fetchProject } from "../../../api/fetchCalls";
import Task from "../../Task/Task";

const ProjectView = () => {
  const [busy, setBusy] = useState(true);
  const { id } = useParams();
  let { url } = useRouteMatch();
  const project = useProject(id, setBusy);
  const tasks = project ? getTasks(project) : null;
  return busy ? (
    <p>No Bueno</p>
  ) : (
    <div>
      <p>{project.title}</p> <p>{project.description}</p>
      <p>
        {project.tasks.length} Tasks <Link to={`${url}/task/create`}>Add</Link>
      </p>
      <div>{tasks ? tasks : null}</div>
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

const getTasks = (project) => {
  let taskArray = [];
  for (let i in project.tasks) {
    taskArray.push(<Task key={i} task={project.tasks[i]} />);
  }
  return taskArray;
};

export default ProjectView;
