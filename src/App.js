import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";

function App() {
  const [items] = useState(["item0", "item1", "item2"]);
  const onDragEnd = (result) => {
    const remove = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, remove[0]);
  };
  return (
    <div className="dragDropArea">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Draggable draggableId="draggable-1" index={0}>
                {(provided) => (
                  <div
                    className="item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {items[0]}
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="draggable-2" index={1}>
                {(provided) => (
                  <div
                    className="item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {items[1]}
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="draggable-3" index={2}>
                {(provided) => (
                  <div
                    className="item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {items[2]}
                  </div>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
