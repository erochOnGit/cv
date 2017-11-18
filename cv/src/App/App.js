import React from "react";
import EnhanceApp from "./EnhanceApp";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import SideBarI from "../SideBarI/SideBarI";
import Core from "../Core/index";
import Root from "../Root/Root";

const App = props => (
  <Router>
    <Root>
      <SideBarI />
      <SideBar>
        {props.colors ? (
          props.colors.map(color => (
            <SideBarI
              style={{ background: color.value, color: "lightgrey" }}
              key={color.id}
            >
              {color.description || "[no description]"}
            </SideBarI>
          ))
        ) : (
          <div>Loading...</div>
        )}
        <SideBarI />
      </SideBar>
      <Core>Welcome</Core>
    </Root>
  </Router>
);
export default EnhanceApp(App);
