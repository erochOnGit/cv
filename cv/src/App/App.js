import React from "react";
import EnhanceApp from "./EnhanceApp";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import SideBar from "../SideBar";
import SideBarI from "../SideBarI";
import Core from "../Core";
import Root from "../Root";
import Color from "../Color";

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
              <Link to={`/color/${color.id}`}>
                {color.description || "[no description]"}
              </Link>
            </SideBarI>
          ))
        ) : (
          <div>Loading...</div>
        )}
        <SideBarI />
      </SideBar>
      <Core>
        <Route exact={true} path="/" render={() => <h1>Welcome</h1>} />
        {props.colors && <Color /> }
      </Core>
    </Root>
  </Router>
);
export default EnhanceApp(App);
