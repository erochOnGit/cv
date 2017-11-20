import React from "react";
import styles from "../styles";
import { Route } from "react-router-dom";
import EnhancerHSL from "./EnhanceHSL";

const positionInDiv = () => {};
const HSL = props => (
  <Route
    path={props.path}
    key={props.key}
    location={props.location}
    render={({ match: { params } }) => (
      <div
        style={{
          ...styles.fill,
          ...styles.hsl,
          background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
        }}
      >
        hsl({params.h}, {params.s}%, {params.l}%)
      </div>
    )}
  />
);
export default EnhancerHSL(HSL);
