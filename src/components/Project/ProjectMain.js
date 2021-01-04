import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import ProjectPage from "./ProjectPage/ProjectPage";
import ProjectCreate from "./ProjectCreate/ProjectCreate";
import ProjectDelete from "./ProjectDelete/ProjectDelete";
import ProjectView from "./ProjectView/ProjectView";
import TaskCreate from "../Task/TaskCreate/TaskCreate";

const ProjectMain = ({ user, setProjects }) => {
  let history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/signin");
  };

  return (
    <div>
      <div className="top-bar df-row">
        <div className="topbar-content-container mw700 df-row df-space-between">
          <div>Too-Doo</div>
          <div className="topbar-logout" onClick={handleLogout}>
            Log Out <i class="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
      <div className="df-col">
        <Switch>
          <Route
            path="/project"
            exact
            component={() => <ProjectPage user={user} />}
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
