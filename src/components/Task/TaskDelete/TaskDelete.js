import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { deleteTask } from "../../../api/fetchCalls";

const TaskDelete = ({ taskToDelete, setTaskDelete }) => {
  let history = useHistory();
  let { url } = useRouteMatch();
  let id = taskToDelete._id;

  const handleSubmit = async (event) => {
    event.preventDefault();
    await Promise.resolve(deleteTask(id));
    setTimeout(() => {
      setTaskDelete(false);
      history.push(url);
    }, 500);
  };

  return (
    <div className="delete-modal df-col">
      <div className="delete-modal-content">
        <form onSubmit={handleSubmit}>
          <label className="delete-modal-label">
            Are you Sure you want to delete this task?
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
              onClick={() => setTaskDelete(false)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskDelete;
