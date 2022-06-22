import React from "react";
import Error401 from "./assets/error401.png";
import './Profile.css'

function Error() {
  return (
    <div
      className="errorbody"
      style={{ backgroundColor: "#FFCC80", height: "100vh" }}
    >
      <div className="row justify-content-center align-items-center">
        <div className="box">
          <h1 className="text-white" style={{ fontSize: "100px" }}>
            401
          </h1>
          <h4 className="text-white" style={{ fontSize: "40px" }}>
            Authorzation Required
          </h4>
          <img src={Error401} style={{ height: "250px" }} />
        </div>
      </div>
    </div>
  );
}

export default Error;
