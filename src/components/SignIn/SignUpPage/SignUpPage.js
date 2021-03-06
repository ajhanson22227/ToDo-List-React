import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { createUser } from "../../../api/fetchCalls";
import Loader from "../../Loader/Loader";

const SignUpPage = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const user = {
      username: username,
      password: password,
    };
    const res = await Promise.resolve(createUser(user));
    setLoading(false);
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
      {loading ? <Loader /> : null}
      <div className="sign-in-div">
        <div className="sign-in-text">
          <p>
            Sign up for <span>Too-Doo</span>
          </p>
        </div>

        <form className="sign-in-form" onSubmit={handleSubmit}>
          <label className="sign-in-form-text"> Username: </label>
          <br />
          <input
            type="text"
            className="sign-in-form-input"
            autoComplete="off"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <label className="sign-in-form-text">Password:</label>
          <br />
          <input
            type="password"
            className="sign-in-form-input"
            autoComplete="off"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <label className="sign-in-form-text">Confirm Password:</label> <br />
          <input
            type="password"
            className="sign-in-form-input"
            autoComplete="off"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <br />
          <input
            className="sign-in-form-submit"
            type="submit"
            value="Create Account"
          />
        </form>
        <span style={{ color: "red" }}>{error ? error : null}</span>
        <p className="no-account-text">
          Already have an account?{" "}
          <Link className="sign-up-link" to="/user/signin">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
