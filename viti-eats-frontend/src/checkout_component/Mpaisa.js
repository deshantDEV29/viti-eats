import React from "react";
import { Link } from "react-router-dom";
import vodafone_logo from "../assets/vodafone_logo1.png";

function Mpaisa() {
  return (
    <div
      className="container rounded mt-3"
      style={{ border: "1px solid", borderColor: "grey" }}
    >
      <div className="row justify-content-between rounded w-100">
        <div
          className="col-sm w-50 p-4"
          style={{ backgroundColor: " #e60000" }}
        >
          <p className="text-left text-white">TOTAL :</p>
          <p className="text-left text-white" style={{ fontSize: "40px" }}>
            $50
          </p>
        </div>
        <div className="col-sm p-4">
          <img src={vodafone_logo} alt="" className="w-50  float-right" />
        </div>
      </div>
      <div className="row justify-content-between rounded w-100">
        <div className="column w-25 p-4">
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="rounded text-danger bg-light border p-1">
              CANCEL
            </button>
          </Link>
        </div>
        <div className="column w-25 p-4">
          <button
            disabled
            className="rounded text-danger bg-white  border border-danger p-1 "
          >
            PAYMENT
          </button>
        </div>
      </div>
      <div className="row m-2 w-100">
        <div className="column p-4 ">
          <div className="w-50">
            <label className="form-label float-left">
              M-PAISA PHONE NUMBER
            </label>
            <input
              type="text"
              id="name"
              className="text-center border-0 rounded p-2 "
              required="required"
              style={{ backgroundColor: "#D3D3D3" }}
            />
          </div>
          <div className="w-50 float-left">
            <label className="form-label float-left">PIN</label>
            <input
              type="text"
              id="name"
              className="text-center border-0 rounded p-2 "
              required="required"
              style={{ backgroundColor: "#D3D3D3" }}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="mb-3 ">
          <button
            className="rounded text-white border-0 p-2 w-25"
            style={{ backgroundColor: " #e60000" }}
          >
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mpaisa;
