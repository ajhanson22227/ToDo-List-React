import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import ProjectPage from "./ProjectPage/ProjectPage";
import ProjectDelete from "./ProjectDelete/ProjectDelete";
import ProjectView from "./ProjectView/ProjectView";

const ProjectMain = ({ user, setProjects }) => {
  let history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/signin");
  };

  return (
    <div className="main-container">
      <div className="top-bar df-row">
        <div className="topbar-content-container mw700 df-row df-space-between">
          <div>Too-Doo</div>
          <div className="topbar-logout" onClick={handleLogout}>
            Log Out <i className="fas fa-sign-out-alt"></i>
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
          <Route
            path="/project/:projid"
            exact
            component={() => <ProjectView />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default ProjectMain;
