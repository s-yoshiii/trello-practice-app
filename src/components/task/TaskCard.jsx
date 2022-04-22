import React, { useState } from "react";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskAddInput from "./input/TaskAddInput";
import TaskCardTitle from "./TaskCardTitle";
import Tasks from "./Tasks";

const TaskCard = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="taskCard">
      <div className="taskCardHeadArea">
        <TaskCardTitle />
        <TaskCardDeleteButton />
      </div>
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default TaskCard;
