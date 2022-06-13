import React from "react";
import "./VendorNavigator.css";
import { useNavigate } from "react-router-dom";

function VendorNavigator() {
  let name = localStorage.getItem("username");
  let userid = localStorage.getItem("userid");
  let token = localStorage.getItem("token");
  let navigate = useNavigate();

  async function logout(e) {
    token = token.replaceAll('"', "");
    e.preventDefault();

    let id = userid;
    let user_id = { id };

    console.log(token);

    console.log(user_id);
    let result = await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      console.log(result);
      localStorage.removeItem("item");
      localStorage.removeItem("vendorid");
      localStorage.removeItem("vendorrestaurantid");
      localStorage.removeItem("vendorname");
      localStorage.removeItem("vendoremail");
      localStorage.removeItem("vendorrole");
      localStorage.removeItem("token");
      navigate("/notabuyer");
      window.location.reload(false);
    } else {
      console.log("Logout Unsucessful");
    }
    e.target.reset();
  }
  return (
    <div className="">
      <div className=".col-xs-6 .col-md-4">
        <div className="area "></div>
        <nav className="main-menu pt-5">
          <ul>
            <li>
              <a href="/vendor/">
                <i className="fa fa-home fa-2x"></i>
                <span className="nav-text">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/vendor/deliveryboy">
                <i className="fa fa-laptop fa-2x"></i>
                <span className="nav-text">Delivery Boy</span>
              </a>
            </li>
            {/* <li className="has-subnav">
            <a href="/vendor/order">
              <i className="fa fa-laptop fa-2x"></i>
              <span className="nav-text">Process Order</span>
            </a>
          </li> */}
            <li>
              <a href="/vendor/logout" onClick={logout}>
                <i className="fa fa-bar-chart-o fa-2x"></i>
                <span className="nav-text">Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default VendorNavigator;
