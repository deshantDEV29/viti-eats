import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactSpinner from "./ReactSpinner";
import CurrencyFormat from "react-currency-format";

function OrderSent() {
  const [data, setData] = useState([]);
  const [total_sales, setTotal_sales] = useState("");
  const [total_product, setTotal_product] = useState("");
  let navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  let vendor_id = localStorage.getItem("vendorrestaurantid");
  useEffect(() => {
    async function fetchdata() {
      let vendorid = { vendor_id };
      console.log("vendor id", vendor_id);
      if (vendor_id !== null) {
        let result = await fetch("http://localhost:8000/api/getOrderSent", {
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
      } else {
        navigate("/error");
      }
    }
    fetchdata();
  }, []);

  const DisplayData = data.map((orders) => {
    const toComponentVendorOrders = () => {
      navigate("/vendor/orderdetails", {
        state: {
          id: orders.id,
          name: orders.name,
          address: orders.address,
          items: orders.food_items,
          amount: orders.amount,
          deliveryboy_name: orders.deliveryboy_name,
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
          <button
            class="btn btn-primary text-white"
            role="button"
            value={orders.id}
            onClick={() => {
              toComponentVendorOrders();
            }}
          >
            View Details
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      {!isLoading ? (
        <>
          <div class="row"></div>
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
        </>
      ) : (
        <ReactSpinner />
      )}
    </div>
  );
}

export default OrderSent;
