import React, { useState } from "react";

const SignUpPage = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password || !confirmPassword) {
      setError("Cannot Leave Any Field Blank");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords Do Not Match.");
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
        <label>
          Confirm Password:
          <input
            type="text"
            name="confirmPassword"
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
