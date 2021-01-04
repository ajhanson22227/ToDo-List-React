import React from "react";
import { useHistory } from "react-router-dom";
import { deleteProject } from "../../../api/fetchCalls";

const ProjectDelete = ({ projToDelete, setPDelete }) => {
  let history = useHistory();
  let id = projToDelete._id;

  const handleSubmit = async (event) => {
    event.preventDefault();
    await Promise.resolve(deleteProject(id));
    setTimeout(() => {
      history.push("/project");
    }, 1000);
  };

  return (
    <div className="delete-modal df-col">
      <div className="delete-modal-content">
        <form onSubmit={handleSubmit}>
          <label className="delete-modal-label">
            Are you Sure you want to delete this project?
          </label>
          <br />
          <div className="delete-modal-button-container df-row">
            <input
              className="delete-modal-button button"
              type="submit"
              value="Yes"
            />
            <input
              className="delete-modal-button button"
              type="button"
              value="Cancel"
              onClick={() => setPDelete(false)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectDelete;
