import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TaskCardDeleteButton = () => {
  return (
    <div>
      <button className="taskCardDeleteButton">
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;
