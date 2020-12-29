import React, { useEffect, useState } from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import { fetchProject } from "../../../api/fetchCalls";
import Task from "../../Task/Task";

const ProjectView = () => {
  const [busy, setBusy] = useState(true);
  const [order, setOrder] = useState(1); //1 for low to high -1 for high to low
  const { id } = useParams();
  let { url } = useRouteMatch();
  const project = useProject(id, setBusy);
  let tasks = project ? getTasks(project) : null;
  if (tasks) tasks = sortTasks(tasks, order);
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
  project.tasks = sortTasks(project.tasks);
  for (let i in project.tasks) {
    taskArray.push(<Task key={i} task={project.tasks[i]} />);
  }
  return taskArray;
};

const sortTasks = (tasks, sortOrder) => {
  console.log(sortOrder);
  tasks.sort((a, b) => {
    if (
      a.priority === "High" &&
      (b.priority === "Low" || b.priority === "Medium")
    ) {
      return sortOrder === 1 ? -1 : 1;
    }
    if (
      a.priority === "Low" &&
      (b.priority === "High" || b.priority === "Medium")
    ) {
      return sortOrder === 1 ? 1 : -1;
    }
    if (a.priority === "Medium" && b.priority === "High") {
      return sortOrder === 1 ? 1 : -1;
    }
    if (a.priority === "Medium" && b.priority === "Low") {
      return sortOrder === 1 ? -1 : 1;
    }
    return 0;
  });
  return tasks;
};

export default ProjectView;
