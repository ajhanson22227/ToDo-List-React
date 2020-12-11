import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createUser } from "../../api/fetchCalls";

const SignUpPage = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password || !confirmPassword) {
      setError("Cannot Leave Any Field Blank");
      setPassword("");
      setConfirmPassword("");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords Do Not Match.");
      setPassword("");
      setConfirmPassword("");
      return;
    }
    const user = {
      username: username,
      password: password,
    };
    const res = await Promise.resolve(createUser(user));
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
        <label>
          Confirm Password:
          <input
            type="text"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Create Account" />
      </form>
      <span style={{ color: "red" }}>{error ? error : null}</span>
    </div>
  );
};

export default SignUpPage;
