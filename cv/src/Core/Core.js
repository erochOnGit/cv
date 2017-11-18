import React from "react";

const Core = props => (
  <div style={{ flex: 1, height: "100vh", overflow: "auto" }}>
      {console.log(props)}
    <div style={{ padding: "20px" }} {...props} />
  </div>
);
export default Core;
