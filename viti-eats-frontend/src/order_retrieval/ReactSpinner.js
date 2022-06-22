import { grey } from "@mui/material/colors";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import BeatLoader from "react-spinners/BeatLoader";

import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function ReactSpinner() {
  return (
    // <div className="App d-flex flex-column">
    //   <div className="flex-grow-1 d-flex align-items-center justify-content-center">
    //     <ClipLoader color={grey} size={100} css={override} />
    //   </div>
    // </div>
    <div className="App d-flex flex-column text-center">
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <BeatLoader color={"grey"} margin={"10px"} />
      </div>
    </div>
  );
}

export default ReactSpinner;
