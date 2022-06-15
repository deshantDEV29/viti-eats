import { Link } from "react-router-dom";

import "./Order.css";

import ReactSpinner from "../ReactSpinner";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Order() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [deliverymethod, setDeliverymethod] = useState("");
  const [cartempty, setCartempty] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [OrderData, setOrderData] = useState([]);
  const [key, setKey] = useState("");
  const name2 = [];
  let navigate = useNavigate();
  let user_id = localStorage.getItem("userid"); //  localStorage.getItem("userid");

  useEffect(() => {
    setAddress(localStorage.getItem("address"));
    async function fetchdata() {
      let userid = { user_id };
      try {
        let result = await fetch("http://localhost:8000/api/getOrder", {
          method: "POST",
          body: JSON.stringify(userid),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        result = await result.json();
        setOrderData(result);
        setIsEmpty(false);
        console.log("test");

        console.log(result);
        setLoading(false);
      } catch (error) {
        setIsEmpty(true);
        setLoading(false);
        console.log(error);
      }
      console.log("is empty", isEmpty);
    }
    fetchdata();
  }, []);

  const DisplayData = OrderData.map((orders) => {
    const toComponentMenu = () => {
      navigate("/ordertrack", { state: { id: OrderData.id } });
    };
    if (orders == null) {
    } else {
    }
    return (
      <tr>
        <td className="pr-3">{orders.id}</td>
        <td className="pr-3">{orders.amount}</td>
        <td className="pr-3">{orders.address}</td>
        <td className="pr-3">{orders.order_status}</td>

        <td className="pr-3 text-center align-middle float-top" align="center">
          <button
            onClick={() => {
              toComponentMenu();
            }}
            disabled={orders.order_status === "processing"}
            className="btn btn-primary mt-5 text-white text-center"
          >
            Track
          </button>
        </td>
      </tr>
    );
  });

  function CheckifEmpty() {
    if (isEmpty !== true) {
      console.log("is empty before print", isEmpty);
      return (
        <div>
          <h1>Orders</h1>

          <div className="container">
            <table
              id="dtBasicExample"
              className="table table-striped table-bordered"
              cellSpacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <th className="">Order ID</th>
                  <th className="">Amount</th>
                  <th className="">Address</th>
                  <th className="">Status</th>
                  <th className=""></th>
                </tr>
              </thead>
              <tbody>{DisplayData}</tbody>
            </table>
          </div>
        </div>
      );
    } else {
      console.log("is empty before print", isEmpty);
      return (
        <div className="container">
          <div
            className="row justify-content-around m-2 rounded border-0 shadow w-100"
            style={{
              //border: "1px solid",
              borderColor: "grey",
              backgroundColor: "#ccffff",
            }}
          >
            <div className="column p-4">
              <h4>Oops Nothing</h4>
              <h4>to</h4>
              <h4>See Here !!!!</h4>
              <Link to="/" style={{ color: "red" }}>
                <button className="btn btn-primary mt-5 text-white text-center rounded-pill">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="MainDiv">
      {!isLoading ? <CheckifEmpty /> : <ReactSpinner />}
    </div>
  );
}

export default Order;
