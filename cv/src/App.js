import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import Core from "./Core";
import Root from "./Root/Root";

const App = () => (
  <Router>
    <Root>
      <SideBar />
      <Core>Welcome</Core>
    </Root>
  </Router>
);
export default App;
