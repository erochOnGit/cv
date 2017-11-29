import React from "react";
import { Route } from "react-router-dom";
import EnhancerHSL from "./EnhanceHSL";
import DraggableSection from "./DraggableSection";
const HSL = props => (
  <Route
    path={props.path}
    key={props.key}
    location={props.location}
    render={({ match: { params } }) => (
      <div>
        {props.children.map((child, index) => {
          return (
            <DraggableSection key={index} params={params} {...props}>
              {child}
            </DraggableSection>
          );
        })}
      </div>
    )}
  />
);
export default EnhancerHSL(HSL);
