import { Link } from "react-router-dom";

import "./Order.css";

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
      console.log("test");

      console.log(result);
      setLoading(false);
    }
    fetchdata();
  }, []);

  const DisplayData = OrderData.map((orders) => {
    //  const toComponentMenu = () => {
    //    navigate("/menu", { state: { id: restaurant.id } });
    //  };
    return (
      <tr>
        <td className="pr-3">{orders.id}</td>
        <td className="pr-3">{orders.address}</td>
        <td className="pr-3">{orders.amount}</td>

        {/* <td className="pr-3">
          <button>Edit</button>
        </td> */}
        <td className="pr-3 ">
          <a
            value={OrderData.id}
            className="btn btn-primary mt-5 text-white text-center"
            role="button"
          >
            Edit
          </a>
        </td>
      </tr>
    );
  });

  return (
    <div className="MainDiv">
      <h1>Orders</h1>
      <div className="float-left">
        {" "}
        <br />
        <div className=".myDiv" style={{ marginLeft: "50px" }}>
          <button className="button button1">Export orders to.CSV </button>
        </div>
        <br />
      </div>

      <br />

      <div className="container">
        <table id="example" class="display">
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>TOTAL</th>
              <th>PAYMENT METHOD</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>1</td>
              <td>19</td>
              <td>MPAISA</td>
              <td>DELIVERED</td>

              <td>
                <a className="btn btn-success" href="/ordertrack">
                  Track Order
                </a>
              </td>
            </tr> */}
            {DisplayData}
          </tbody>
          <tfoot>
            <tr>
              <th>ORDER NUMBER</th>
              <th>TOTAL</th>
              <th>PAYMENT METHOD</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Order;
