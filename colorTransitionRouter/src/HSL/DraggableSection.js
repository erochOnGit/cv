import React from "react";

const DraggableSection = props => (
  <div
    draggable={true}
    onDragStart={props.actions.start}
    onDragEnd={props.actions.stop}
    onDrag={props.actions.move}
    style={props.styleAssignation(props.params)}
  >
    {props.children}
  </div>
);

export default DraggableSection;
