import React from "react";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import Task from "./Task";

const Tasks = ({ taskList, setTaskList, provided }) => {
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="droppable">
          {(provided) => {
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {taskList.map((task) => (
                <div key={task.id}>
                  <Task
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>;
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
