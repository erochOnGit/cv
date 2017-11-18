import React from "react";

const SideBarI= props => (
    <div
        style={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            padding: "5px 10px"
        }}
        {...props}
    />
);
export default SideBarI;
