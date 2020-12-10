import React from "react";

const ProjectPage = ({ user }) => {
  console.log(user);
  return (
    <div>
      <p>Hello</p>
      <p>World</p>
      <p>or should I say.. Hello {user.username}</p>
    </div>
  );
};

export default ProjectPage;
