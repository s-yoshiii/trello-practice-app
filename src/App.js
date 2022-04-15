import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  const [items] = useState([
    { id: 0, text: "item0" },
    { id: 2, text: "item1" },
    { id: 3, text: "item2" },
  ]);
  const onDragEnd = (result) => {
    const remove = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, remove[0]);
  };
  return (
    <>
      <Header />
      <div className="dragDropArea">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {items.map((item, index) => (
                  <Draggable
                    draggableId={item.text}
                    index={item.id}
                    key={item.id}
                  >
                    {(provided) => (
                      <div
                        className="item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.text}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
}

export default App;
