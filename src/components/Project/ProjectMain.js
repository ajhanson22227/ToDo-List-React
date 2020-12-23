import React from "react";
import { Switch, Route } from "react-router-dom";
import ProjectPage from "./ProjectPage/ProjectPage";
import ProjectCreate from "./ProjectCreate/ProjectCreate";
import ProjectDelete from "./ProjectDelete/ProjectDelete";
import ProjectView from "./ProjectView/ProjectView";
import TaskCreate from "../Task/TaskCreate/TaskCreate";

const ProjectMain = ({ user, setProjects }) => {
  return (
    <div>
      <div className="top-bar">
        <p>Too-Doo</p>
      </div>
      <div className="main-project">
        <Switch>
          <Route
            path="/project"
            exact
            component={() => <ProjectPage user={user} />}
          />
          <Route
            path="/project/create"
            exact
            component={() => (
              <ProjectCreate user={user} setProjects={setProjects} />
            )}
          />
          <Route
            path="/project/:id/delete"
            exact
            component={() => <ProjectDelete />}
          />
          <Route path="/project/:id" exact component={() => <ProjectView />} />
          <Route
            path="/project/:projid/task/create"
            exact
            component={() => <TaskCreate />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default ProjectMain;
