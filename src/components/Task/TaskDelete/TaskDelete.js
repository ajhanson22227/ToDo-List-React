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
    <div className="delete-modal">
      <div className="delete-modal-content">
        <form onSubmit={handleSubmit}>
          <label>Are you Sure you want to delete this task?</label>
          <p>
            <span>{taskToDelete.description}</span>
          </p>
          <br />
          <input type="submit" value="Delete" />
          <input
            type="button"
            value="Cancel"
            onClick={() => setTaskDelete(false)}
          />
        </form>
      </div>
    </div>
  );
};

export default TaskDelete;
