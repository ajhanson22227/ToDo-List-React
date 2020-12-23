/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { fetchUserStorage } from "./api/fetchCalls";
import SignInPage from "./components/SignIn/SignInPage/SignInPage";
import SignUpPage from "./components/SignIn/SignUpPage/SignUpPage";
import ProjectMain from "./components/Project/ProjectMain";

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
      <Route
        path="/project"
        component={() => <ProjectMain user={user} setProjects={setProjects} />}
      />
      <Redirect from="/" to="/user/signin" />
    </Switch>
  );
};

export default App;
