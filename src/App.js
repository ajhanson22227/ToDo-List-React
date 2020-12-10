/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchUserStorage } from "./api/fetchCalls";
import SignInPage from "./components/SignInPage/SignInPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import ProjectCreate from "./components/ProjectCreate/ProjectCreate";

const App = () => {
  const [user, setUser] = useState(fetchUserStorage());
  const [projects, setProjects] = useState([]);

  return (
    <div>
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
          component={() => (
            <ProjectPage
              user={user}
              projects={projects}
              setProjects={setProjects}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
