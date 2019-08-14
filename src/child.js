import React from "react";
import B from "./B";
const Child = props => {
  const { ChildReact } = props;

  return (
    <div className="App">
      <h2>Child Component</h2>
      <h2>{ChildReact}</h2>
      <B bname={ChildReact} />
      <button onClick={props.childFunction}>Trigger Event</button>
    </div>
  );
};
export default Child;
