import React from "react";
import { useHistory } from "react-router-dom";

const ProjectDelete = () => {
  let history = useHistory();

  const handleCancel = (event) => {
    history.push("/project");
  };

  return (
    <div className="delete-form">
      <form>
        <label>Are you Sure you want to delete this project?</label>
        <br />
        <input type="submit" value="Delete" />
        <input type="button" value="Cancel" onClick={handleCancel} />
      </form>
    </div>
  );
};

export default ProjectDelete;
