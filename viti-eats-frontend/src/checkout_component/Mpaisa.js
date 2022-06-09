import { Link } from "react-router-dom";
import vodafone_logo from "../assets/vodafone_logo1.png";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Mpaisa() {
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const location = useLocation();
  let navigate = useNavigate();
  let id = location.state.id;
  let orderDetails = location.state.orderDetails;
  console.log("cart id", id);
  console.log("order details", orderDetails);

  async function placeorder() {
    let authenticate = { phone, pin };
    console.log(authenticate);

    let result = await fetch("http://localhost:8000/api/authenticatePayment", {
      method: "POST",
      body: JSON.stringify(authenticate),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.log("authentication", result);
    if (result["success"]) {
      console.log(id);
      console.log(orderDetails);

      let result1 = await fetch("http://localhost:8000/api/createOrder", {
        method: "POST",
        body: JSON.stringify(orderDetails),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result1 = await result1.json();
      console.log("order made", result1);

      let cart_id = {id}
      console.log('cart_id',id)

      let result2 = await fetch("http://localhost:8000/api/deleteCart", {
        method: "POST",
        body: JSON.stringify(id),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result2 = await result2.json();
      console.log("cart delete", result2);

      // if (result1["SuccessfullyOrdered"]) {
      //   console.log(result1);
      //   console.log(result2);

      //   navigate("/checkout");
      //   window.location.reload(false);
      // } else {
      //   console.log("order add unsuccessful");
      // }

      navigate("/checkout");
      window.location.reload(false);
    } else {
      console.log("authentication unsuccessful");
    }
  }

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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="mb-3 ">
          <button
            className="rounded text-white border-0 p-2 w-25"
            style={{ backgroundColor: " #e60000" }}
            onClick={placeorder}
          >
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mpaisa;
