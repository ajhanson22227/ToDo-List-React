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
      <div className="project-view-top df-col">
        <p className="project-view-project-title">{project.title}</p>{" "}
        <p className="project-view-project-description">
          {project.description}
        </p>
      </div>

      <div className="project-view-task-body df-col">
        <div className="task-body-top df-row df-space-between">
          <div style={{ flexGrow: "1.5" }}>
            <span className="task-body-top-title">Too-Doo Tasks</span>{" "}
            <span className="task-body-top-count">
              ({project.tasks.length} Tasks)
            </span>
          </div>
          <div
            style={{
              flexGrow: "1",
            }}
          >
            Sort By <i class="fas fa-sort"></i>
          </div>
          <div>
            <div className="create-project-button">New Task</div>
          </div>
        </div>

        <div class="task-container">{tasks}</div>
      </div>
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
