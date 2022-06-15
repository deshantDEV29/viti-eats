import React from "react";
import "./Navigator.css";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { useNavigate } from "react-router-dom";
import "./AdminHeader.css";

function Navigator() {
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
      localStorage.removeItem("adminid");
      localStorage.removeItem("adminrestaurantid");
      localStorage.removeItem("adminname");
      localStorage.removeItem("adminemail");
      localStorage.removeItem("userrole");
      localStorage.removeItem("token");
      navigate("/login");
      window.location.reload(false);
    } else {
      console.log("Logout Unsucessful");
    }
    e.target.reset();
  }
  return (
    <div className=".col-xs-6 .col-md-4">
      <div className="area"></div>
      <nav className="main-menu pt-5">
        <ul>
          <li>
            <a href="/admin/">
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">Dashboard</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="/admin/restaurant">
              <i className="fa fa-laptop fa-2x"></i>
              <span className="nav-text">Restaurant</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="/admin/foodcategory">
              <i className="fa fa-list fa-2x"></i>
              <span className="nav-text">Food Category</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="/admin/fooditem">
              <i className="fa fa-folder-open fa-2x"></i>
              <span className="nav-text">Food Item</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="/admin/fooditem" onClick={logout}>
              <i className="fa fa-bar-chart-o fa-2x"></i>
              <span className="nav-text">Logout</span>
            </a>
          </li>
          {/* <li class="has-subnav">
            <a onClick={logout}>
              <i className="fa fa-bar-chart-o fa-2x"></i>
              <span className="nav-text">Logout</span>
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navigator;
