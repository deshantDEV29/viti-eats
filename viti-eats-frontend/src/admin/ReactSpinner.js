import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";

function ReactSpinner() {
  return (
    <div className="App d-flex flex-column">
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <BeatLoader color={"orange"} margin={"10px"} />
      </div>
    </div>
  );
}

export default ReactSpinner;