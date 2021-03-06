import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactSpinner from "./ReactSpinner";
import CurrencyFormat from "react-currency-format";
function VendorHome() {
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

        let result1 = await fetch("http://localhost:8000/api/totalproduct", {
          method: "POST",
          body: JSON.stringify(vendorid),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        result1 = await result1.json();
        setTotal_product(result1);

        let result2 = await fetch("http://localhost:8000/api/totalsales", {
          method: "POST",
          body: JSON.stringify(vendorid),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        result2 = await result2.json();
        setTotal_sales(result2);

        setLoading(false);
      } else {
        navigate("/error");
      }
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
          amount: orders.amount,
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
            disabled={orders.order_status === "Order Sent"}
            value={orders.id}
            onClick={() => {
              toComponentVendorOrders();
            }}
          >
            Process
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      {!isLoading ? (
        <>
          <div class="row">
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body bg-primary">
                  <h5 class="card-title">Total Product</h5>
                  <h5 class="card-title">{total_product}</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body bg-info">
                  <h5 class="card-title">Total Sales</h5>
                  <h5 class="card-title">
                    <CurrencyFormat
                      renderText={(value) => (
                        <>
                          <p>
                            <strong>{value}</strong>
                          </p>
                        </>
                      )}
                      decimalScale={2}
                      value={total_sales}
                      displayType={"text"}
                      thousandSeperator={true}
                      prefix={"$"}
                    />
                  </h5>
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
        </>
      ) : (
        <ReactSpinner />
      )}
    </div>
  );
}

export default VendorHome;
