import React from 'react'
import './Navigator.css'
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FastfoodIcon from "@mui/icons-material/Fastfood";

function Navigator() {
  return (
    <div className=".col-xs-6 .col-md-4">
      <Link to="/admin/" style={{ textDecoration: "none" }}>
        <div className="navigator__row">
          <div className="d-flex">
            <p>
              <DashboardIcon />
            </p>
            <p>Dashboard</p>
          </div>
        </div>
      </Link>
      <Link to="/admin/restaurant" style={{ textDecoration: "none" }}>
        <div className="navigator__row">
          <p>
            <RestaurantIcon />
          </p>
          <p>Restaurant</p>
        </div>
      </Link>
      <Link to="/admin/foodcategory" style={{ textDecoration: "none" }}>
        <div className="navigator__row">
          <p>
            <MenuBookIcon />
          </p>
          <p>Food Category</p>
        </div>
      </Link>
      <Link to="/admin/fooditem" style={{ textDecoration: "none" }}>
        <div className="navigator__row">
          <p>
            <FastfoodIcon />
          </p>
          <p>Food Item</p>
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

export default Navigator