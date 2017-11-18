import React from "react";
import { Route } from "react-router-dom";

const Color = ({ match }) => (
  <Route
    path="/color/:colorId"
    render={({ match }) => (
      <div style={{ background: match.params.colorId }}>
        {match.params.colorId}
      </div>
    )}
  />
);
export default Color;
