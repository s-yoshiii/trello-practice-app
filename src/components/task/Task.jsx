import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Task = ({ task }) => {
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton">
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default Task;
