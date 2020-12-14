import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { deleteProject } from "../../../api/fetchCalls";

const ProjectDelete = () => {
  let history = useHistory();
  let { id } = useParams();

  const handleCancel = () => {
    history.push("/project");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await Promise.resolve(deleteProject(id));
    setTimeout(() => {
      history.push("/project");
    }, 1000);
  };

  return (
    <div className="delete-form">
      <form onSubmit={handleSubmit}>
        <label>Are you Sure you want to delete this project?</label>
        <br />
        <input type="submit" value="Delete" />
        <input type="button" value="Cancel" onClick={handleCancel} />
      </form>
    </div>
  );
};

export default ProjectDelete;
