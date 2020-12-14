/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchUserStorage } from "./api/fetchCalls";
import SignInPage from "./components/SignInPage/SignInPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import ProjectPage from "./components/Project/ProjectPage/ProjectPage";
import ProjectCreate from "./components/Project/ProjectCreate/ProjectCreate";

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
      <Route
        path="/"
        exact
        component={() => <SignInPage setUser={setUser} />}
      />
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
    </Switch>
  );
};

export default App;
