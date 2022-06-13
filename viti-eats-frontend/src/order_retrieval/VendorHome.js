import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function VendorHome() {
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  let vendor_id = localStorage.getItem("vendorrestaurantid");
  useEffect(() => {
    async function fetchdata() {
      let vendorid = { vendor_id };
      console.log("vendor id", vendor_id);
      let result = await fetch("http://localhost:8000/api/getVendorsOrder", {
        method: "POST",
        body: JSON.stringify(vendorid),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      result = await result.json();
      console.log("result", result);
      setData(result);
      console.log("cart", data);

      setLoading(false);
    }
    fetchdata();
  }, []);

  const DisplayData = data.map((orders) => {
    const toComponentVendorOrders = () => {
      navigate("/vendor/order", {
        state: {
          id: orders.id,
          name: orders.name,
          address: orders.address,
          items: orders.food_items,
          amount: orders.amount
        },
      });
    };
    return (
      <tr>
        <td>{orders.id}</td>
        <td>{orders.name}</td>
        <td>{orders.address}</td>
        <td>${orders.amount}</td>
        <td>{orders.order_status}</td>
        <td>
          <a
            class="btn btn-primary text-white"
            role="button"
            value={orders.id}
            onClick={() => {
              toComponentVendorOrders();
            }}
          >
            Process
          </a>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <div class="row">
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body bg-primary">
              <h5 class="card-title">Total Product</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body bg-info">
              <h5 class="card-title">Total Sales</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body bg-danger">
              <h5 class="card-title">Total category</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-9 mt-5">
        <table class="table">
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Amount</th>
              <th>Order Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>{DisplayData}</tbody>
        </table>
      </div>
    </div>
  );
}

export default VendorHome;
