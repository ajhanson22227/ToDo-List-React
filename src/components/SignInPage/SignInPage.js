import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError("Cannot Leave Any Field Blank");
      return;
    } else {
      setError(null);
    }
    const user = {
      username: username,
      password: password,
    };
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Sign In" />
      </form>
      <span style={{ color: "red" }}>{error ? error : null}</span>
      <p>
        Don't have an account? <Link to="/user/create">Sign Up Here!</Link>
      </p>
    </div>
  );
};

export default SignInPage;
