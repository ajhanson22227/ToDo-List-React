/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchUserStorage } from "./api/userCalls";
import SignInPage from "./components/SignInPage/SignInPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import ProjectPage from "./components/ProjectPage/ProjectPage";

const App = () => {
  const [user, setUser] = useState(fetchUserStorage());

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
          path="/projects"
          exact
          component={() => <ProjectPage user={user} />}
        />
      </Switch>
    </div>
  );
};

export default App;
