import { Link } from "react-router-dom";

import "./Order.css";

import ReactSpinner from "../ReactSpinner";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
if (!$.fn.DataTable.isDataTable("#myTable")) {
  $(document).ready(function () {
    setTimeout(function () {
      $("#table").DataTable({
        // pagingType: "full_numbers",
        pageLength: 5,
        // order: [[0, "desc"]],
        // processing: true,
        dom: "Bfrtip",
        select: {
          style: "single",
        },

        buttons: [
          {
            extend: "pageLength",
            className: "btn btn-secondary bg-secondary",
          },
          {
            extend: "copy",
            className: "btn btn-secondary bg-secondary",
          },
          {
            extend: "csv",
            className: "btn btn-secondary bg-secondary",
          },
          {
            extend: "print",
            customize: function (win) {
              $(win.document.body).css("font-size", "10pt");
              $(win.document.body)
                .find("table")
                .addClass("compact")
                .css("font-size", "inherit");
            },
            className: "btn btn-secondary bg-secondary",
          },
        ],

        // fnRowCallback: function (
        //   nRow,
        //   aData,
        //   iDisplayIndex,
        //   iDisplayIndexFull
        // ) {
        //   var index = iDisplayIndexFull + 1;
        //   $("td:first", nRow).html(index);
        //   return nRow;
        // },

        // lengthMenu: [
        //   [10, 20, 30, 50, -1],
        //   [10, 20, 30, 50, "All"],
        // ],
        // columnDefs: [
        //   {
        //     targets: 0,
        //     render: function (data, type, row, meta) {
        //       return type === "export" ? meta.row + 1 : data;
        //     },
        //   },
        // ],
      });
    }, 1000);
  });
}
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
      if (user_id !== null) {
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
      } else {
        navigate("/error");
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
        <td className="pr-3">{orders.restaurantname}</td>
        <td className="pr-3">${orders.amount}</td>
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
          <div className=" py-5">
            <div className="row py-5">
              <div className="col-lg-10 mx-auto">
                <div className="card rounded shadow border-0">
                  <div className="card-body p-5 bg-white rounded">
                    <div className="table-responsive">
                      <table
                        id="table"
                        className="table table-striped table-bordered"
                      >
                        <thead>
                          <tr>
                            <th>Order No</th>
                            <th>Vendor Name</th>
                            <th>Amount</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Track</th>
                          </tr>
                        </thead>
                        <tbody>{DisplayData}</tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <h1>Orders Page</h1>
            <div className="column p-4" style={{ color: "orange" }}>
              <h5>Oops Nothing</h5>
              <h5>to</h5>
              <h5>show Here !!!!</h5>
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
