import React, { useEffect, useState } from "react";
import { Link, useParams, useRouteMatch, useHistory } from "react-router-dom";
import { fetchProject } from "../../../api/fetchCalls";
import Task from "../../Task/Task";
import TaskDelete from "../../Task/TaskDelete/TaskDelete";

const ProjectView = () => {
  const [busy, setBusy] = useState(true);
  const [order, setOrder] = useState(1); //1 for low to high -1 for high to low
  const [taskDelete, setTaskDelete] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const { id } = useParams();
  const { url } = useRouteMatch();
  const project = useProject(id, setBusy);
  let tasks = getTasks(project, order, setTaskDelete, setTaskToDelete);

  let history = useHistory();

  const handleArrow = () => {
    history.push("/project");
  };

  return busy ? (
    <p>No Bueno</p>
  ) : (
    <div>
      <div className="project-view-top">
        <div className="df-row df-space-between mw700 center">
          <div className="df-row ">
            <i
              onClick={handleArrow}
              className="fas fa-arrow-left fa-3x toparrow"
            ></i>
          </div>
          <div className="df-col">
            <p className="project-view-project-title">{project.title}</p>{" "}
            <p className="project-view-project-description">
              {project.description}
            </p>
          </div>
          <div></div>
        </div>
      </div>

      <div className="project-view-task-body mw700 df-col">
        <div className="task-body-top df-row df-space-between">
          <div className="section-1">
            <span className="task-body-top-title">Too-Doo Tasks</span>{" "}
            <span className="task-body-top-count">
              ({project.tasks.length} Tasks)
            </span>
          </div>
          <div className="section-2 df-row" style={{ alignItems: "flex-end" }}>
            <div
              className="sort-div"
              onClick={() => {
                setOrder(order === 1 ? -1 : 1);
                sortTasks(tasks, order);
              }}
            >
              Sort By <i className="fas fa-sort"></i>
            </div>
            <div
              style={{
                width: "fit-content",
                marginRight: "1em",
                marginBottom: ".5em",
              }}
            >
              <Link to={`${url}/task/create`} className="create-project-button">
                New Task
              </Link>
            </div>
          </div>
        </div>
        {taskDelete ? (
          <TaskDelete
            setTaskDelete={setTaskDelete}
            taskToDelete={taskToDelete}
          />
        ) : null}
        <div className="task-container">{tasks}</div>
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

const getTasks = (project, order, taskDelete, setTaskToDelete) => {
  if (!project) return;
  let taskArray = [];
  project.tasks = sortTasks(project.tasks, order);
  for (let i in project.tasks) {
    taskArray.push(
      <Task
        key={i}
        task={project.tasks[i]}
        setTaskDelete={taskDelete}
        setTaskToDelete={setTaskToDelete}
      />
    );
  }
  return taskArray;
};

const sortTasks = (tasks, sortOrder) => {
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
