import React, { useState } from "react";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
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
