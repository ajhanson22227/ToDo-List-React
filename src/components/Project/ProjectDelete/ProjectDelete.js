import React from "react";
import { useHistory } from "react-router-dom";
import { deleteProject } from "../../../api/fetchCalls";

const ProjectDelete = ({ projToDelete, setPDelete }) => {
  let history = useHistory();
  let id = projToDelete._id;

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
    <div className="delete-modal">
      <div className="delete-modal-content">
        <form onSubmit={handleSubmit}>
          <label>Are you Sure you want to delete this project?</label>
          <p>
            <span>{projToDelete.title}</span>
            <span style={{ marginLeft: "1em", fontStyle: "italic" }}>
              {projToDelete.description}
            </span>
          </p>
          <br />
          <input type="submit" value="Delete" />
          <input
            type="button"
            value="Cancel"
            onClick={() => setPDelete(false)}
          />
        </form>
      </div>
    </div>
  );
};

export default ProjectDelete;
