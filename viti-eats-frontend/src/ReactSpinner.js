import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";

function ReactSpinner() {
  return (
    <div className="App d-flex flex-column text-center">
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <BeatLoader color={"orange"} margin={"10px"} />
      </div>
    </div>
    // <div class="text-center">
    //   <div class="spinner-border" role="status">
    //     <span class="sr-only">Loading...</span>
    //   </div>
    // </div>
  );
}

export default ReactSpinner;