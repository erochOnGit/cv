import React from "react";
import { Route } from "react-router-dom";

const MousePosition = props => (
  <Route
    render={() => (
      <div style={{ position: "absolute" }}>{`hey ${props.mouseCoordinate
        .x}:${props.mouseCoordinate.y}`}</div>
    )}
  />
);
export default MousePosition;
