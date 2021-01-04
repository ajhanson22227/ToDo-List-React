import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../../../api/fetchCalls";
import "./SignIn.css";

const SignInPage = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError("Cannot Leave Any Field Blank");
      setPassword("");
      return;
    } else {
      setError("");
    }
    const user = {
      username: username,
      password: password,
    };
    const res = await Promise.resolve(loginUser(user));
    if (res.err) {
      setError(res.err);
      return;
    } else {
      localStorage.setItem("user", JSON.stringify(res.user));
      setUser(res.user);
      history.push("/project");
    }
  };

  return (
    <div className="sign-in-div">
      <div className="sign-in-text">
        <p>
          Sign in to <span>Too-Doo</span>
        </p>
      </div>

      <form className="sign-in-form" onSubmit={handleSubmit}>
        <label className="sign-in-form-text">Username:</label>
        <br />
        <input
          className="sign-in-form-input"
          type="text"
          name="username"
          autoComplete="off"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <br />
        <label className="sign-in-form-text">Password:</label>
        <br />
        <input
          className="sign-in-form-input"
          type="password"
          name="password"
          autoComplete="off"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <br />
        <input
          className="sign-in-form-submit button"
          type="submit"
          value="Sign In"
        />
      </form>
      <span style={{ color: "red" }}>{error ? error : null}</span>
      <p className="no-account-text">
        Don't have an account?{" "}
        <Link className="sign-up-link" to="/user/signup">
          Sign Up Here!
        </Link>
      </p>
    </div>
  );
};

export default SignInPage;
