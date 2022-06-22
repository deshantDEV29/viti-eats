import React, { useState, useEffect } from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import ReactSpinner from "../ReactSpinner";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  const [vendor_total, setVendor_total] = useState("");
  const [user_total, setUser_total] = useState("");
  const [commision_total, setCommission_total] = useState("");
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  let admin_id = localStorage.getItem("adminid");
  useEffect(() => {
    async function fetchdata() {
      if (admin_id !== null) {
        try {
          let result = await fetch("http://localhost:8000/api/totalvendors");
          result = await result.json();
          setVendor_total(result);
          //////////////////////////
          let result1 = await fetch("http://localhost:8000/api/totalusers");
          result1 = await result1.json();
          setUser_total(result1);
          //////////////////////////
          let result2 = await fetch(
            "http://localhost:8000/api/totalcommisison"
          );
          result2 = await result2.json();
          setCommission_total(result2);
          ////////////////////////////
          let result3 = await fetch(
            "http://localhost:8000/api/displaycommisison"
          );
          result3 = await result3.json();
          setData(result3);
          console.log(data);

          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }

        setLoading(false);
      } else {
        navigate("/error");
      }
    }
    fetchdata();
  }, []);

  const DisplayData = data.map((orders) => {
    return (
      <tr>
        <td className="pr-3">{orders.id}</td>
        <td className="pr-3">{orders.restaurantname}</td>
        <td className="pr-3">{orders.name}</td>
        <td className="pr-3">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  <strong>{value}</strong>
                </p>
              </>
            )}
            decimalScale={2}
            value={orders.commission}
            displayType={"text"}
            thousandSeperator={true}
            prefix={"$"}
          />
        </td>
      </tr>
    );
  });
  return (
    <div className="container-fluid">
      {!isLoading ? (
        <>
          <div className="row">
            <div
              className="col-sm-3 m-2 p-2 rounded shadow card border-0"
              style={{ background: "#3366ff" }}
            >
              <div className="mask flex-center">
                <span>
                  <h5>Total</h5>
                  <h5>Commission</h5>
                  <p>${commision_total}</p>
                </span>

                <AttachMoneyIcon />
              </div>
            </div>
            <div
              className="col-sm-3 m-2 p-2 rounded shadow card border-0"
              style={{ background: "#33cccc" }}
            >
              <div className="mask flex-center">
                <span>
                  <h5>Total </h5>
                  <h5>Vendors</h5>
                  <p>{vendor_total}</p>
                </span>
                <MapsHomeWorkIcon />
              </div>
            </div>

            <div
              className="col-sm-3 m-2 p-2 rounded shadow card border-0"
              style={{ background: "#ff6666" }}
            >
              <div className="mask flex-center">
                <span>
                  <h5>Total</h5>
                  <h5>Users</h5>
                  <p>{user_total}</p>
                </span>

                <GroupsIcon />
              </div>
            </div>
          </div>
          {/* <div class="row">
            <div class="col-sm-3 ">
              <div class="card ">
                <div class="card-body rounded shadow bg-primary">
                  <h5>Total </h5>
                  <h5> Commision</h5>
                  <p>${commision_total}</p>
                  <AttachMoneyIcon />
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body bg-info rounded shadow">
                  <h4>Total </h4>
                  <h4> Vendors</h4>
                  <p>{vendor_total}</p>
                  <MapsHomeWorkIcon />
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <div
                  class="card-body  rounded shadow"
                  style={{ background: "#ff6666" }}
                >
                  <h4>Total </h4>
                  <h4> Users</h4>
                  <p>{user_total}</p>
                  <GroupsIcon />
                </div>
              </div>
            </div>
          </div> */}
          <div className="container-fluid mt-5">
            <div className="row">
              <table
                id="dtBasicExample"
                className="table table-striped table-bordered"
                cellSpacing="0"
                width="100%"
              >
                <thead>
                  <tr>
                    <th className="">Order ID</th>
                    <th className="">Vendor</th>
                    <th className="">Customer</th>
                    <th className="">Commision Earned</th>
                  </tr>
                </thead>
                <tbody>{DisplayData}</tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <ReactSpinner />
      )}
    </div>
  );
}

export default Dashboard;
