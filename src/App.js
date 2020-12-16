/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { fetchUserStorage } from "./api/fetchCalls";
import SignInPage from "./components/SignIn/SignInPage/SignInPage";
import SignUpPage from "./components/SignIn/SignUpPage/SignUpPage";
import ProjectPage from "./components/Project/ProjectPage/ProjectPage";
import ProjectCreate from "./components/Project/ProjectCreate/ProjectCreate";
import ProjectDelete from "./components/Project/ProjectDelete/ProjectDelete";
import ProjectView from "./components/Project/ProjectView/ProjectView";
import TaskCreate from "./components/Task/TaskCreate/TaskCreate";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(fetchUserStorage());
  const [projects, setProjects] = useState([]);

  return (
    <Switch>
      <Route
        path="/user/signin"
        exact
        component={() => <SignInPage setUser={setUser} />}
      />
      <Route
        path="/user/signup"
        exact
        component={() => <SignUpPage setUser={setUser} />}
      />
      {/* <Route
        path="/"
        exact
        component={() =>
          user !== null ? (
            <ProjectPage user={user} />
          ) : (
            <SignInPage setUser={setUser} />
          )
        }
      /> */}
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
      <Redirect from="/" to="/user/signin" />
    </Switch>
  );
};

export default App;
