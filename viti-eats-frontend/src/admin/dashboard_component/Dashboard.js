import React, { useState, useEffect } from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import ReactSpinner from "../ReactSpinner";

function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  const [vendor_total, setVendor_total] = useState("");
  const [user_total, setUser_total] = useState("");
  const [commision_total, setCommission_total] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        let result = await fetch("http://localhost:8000/api/totalvendors");
        result = await result.json();
        setVendor_total(result);
        //////////////////////////
        let result1 = await fetch("http://localhost:8000/api/totalusers");
        result1 = await result1.json();
        setUser_total(result1);
        //////////////////////////
        let result2 = await fetch("http://localhost:8000/api/totalcommisison");
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
    }
    fetchdata();
  }, []);

  const DisplayData = data.map((orders) => {
    return (
      <tr>
        <td className="pr-3">{orders.id}</td>
        <td className="pr-3">{orders.restaurantname}</td>
        <td className="pr-3">{orders.name}</td>
        <td className="pr-3">${orders.commission}</td>
      </tr>
    );
  });
  return (
    <div className="container-fluid">
      {!isLoading ? (
        <>
          <div className="row">
            <div
              className="col-sm-3 m-2 p-2 rounded shadow view overlay zoom"
              style={{ background: "#3366ff" }}
            >
              <div className="mask flex-center">
                <span>
                  <h4>Total Commission</h4>
                  <p>${commision_total}</p>
                </span>

                <AttachMoneyIcon />
              </div>
            </div>
            <div
              className="col-sm-3 p-2 m-2 rounded shadow"
              style={{ background: "#33cccc" }}
            >
              <span>
                <h4>Total </h4>
                <h4>Vendors</h4>
                <p>{vendor_total}</p>
              </span>
              <MapsHomeWorkIcon />
            </div>

            <div
              className="col-sm-3 p-2 m-2 rounded shadow"
              style={{ background: "#ff6666" }}
            >
              <span>
                <h4>Total</h4>
                <h4>Users</h4>
                <p>{user_total}</p>
              </span>

              <GroupsIcon />
            </div>
          </div>
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
