import { grey } from "@mui/material/colors";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function ReactSpinner() {
  return (
    <div className="App d-flex flex-column">
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <ClipLoader color={grey} size={100} />
    </div>
      </div>
   
  );
}

export default ReactSpinner;
