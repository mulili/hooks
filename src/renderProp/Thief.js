import React from "react";

const Thief = props => (
  <div style={{ height: "200px", width: "200px", backgroundColor: "gray" }}>
    <p>Mouse position x is {props.mouse.x}</p>
    <p>Mouse position y is {props.mouse.y}</p>
  </div>
);

export default Thief;
