import React from "react";
import { Route } from "react-router-dom";

const Color = ({ match }) => (
  <Route
    path="/color/:colorId"
    render={({ match }) => <div>{match.params.colorId}</div>}
  />
);
export default Color;
