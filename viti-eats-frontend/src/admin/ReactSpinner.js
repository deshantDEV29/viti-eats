import React from "react";
import CircleLoader from "react-spinners/CircleLoader";

function ReactSpinner() {
  return (
    <div className="App d-flex flex-column">
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <CircleLoader color={"orange"} margin={"10px"} />
      </div>
    </div>
  );
}

export default ReactSpinner;
