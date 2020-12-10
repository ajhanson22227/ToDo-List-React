import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../../api/fetchCalls";

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
      history.push("/projects");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Sign In" />
      </form>
      <span style={{ color: "red" }}>{error ? error : null}</span>
      <p>
        Don't have an account? <Link to="/user/signup">Sign Up Here!</Link>
      </p>
    </div>
  );
};

export default SignInPage;
