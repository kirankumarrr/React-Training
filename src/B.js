import React from "react";
const B = props => {
  const { bname } = props;

  return (
    <div className="App">
      <h2>B Component</h2>
      <h2>{bname}</h2>
    </div>
  );
};
export default B;
