import React from 'react'
import "./VendorNavigator.css";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskIcon from "@mui/icons-material/Task";
import LogoutIcon from "@mui/icons-material/Logout";

function VendorNavigator() {
  return (
    <div className=".col-xs-6 .col-md-4">
      <Link to="/vendor/" style={{ textDecoration: "none" }}>
        <div className="navigator__row">
          <div className="d-flex">
            <p>
              <DashboardIcon />
            </p>
            <p>Dashboard</p>
          </div>
        </div>
      </Link>

      <Link to="/vendor/order" style={{ textDecoration: "none" }}>
        <div className="navigator__row">
          <p>
            <TaskIcon />
          </p>
          <p>Process Order</p>
        </div>
      </Link>
      <Link to="/logout" style={{ textDecoration: "none" }}>
        <div className="navigator__row">
          <p>
            <LogoutIcon />
          </p>
          <p>Logout</p>
        </div>
      </Link>
    </div>
  );
}

export default VendorNavigator