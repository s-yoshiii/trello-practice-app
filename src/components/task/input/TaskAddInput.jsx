import React from "react";

const TaskAddInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add a task" className="taskAddInput" />
      </form>
    </div>
  );
};

export default TaskAddInput;
