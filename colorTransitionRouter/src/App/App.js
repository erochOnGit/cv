import React from "react";
import EnhanceApp from "./EnhanceApp";
import { BrowserRouter as Router } from "react-router-dom";

import AnimationExample from "../AnimationExample";

const App = props => (
  <Router>
    <AnimationExample />
  </Router>
);
export default EnhanceApp(App);
