import React from 'react'
import './Navigator.css'
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FastfoodIcon from "@mui/icons-material/Fastfood";
import './AdminHeader.css'

function Navigator() {
  return (
    <div className=".col-xs-6 .col-md-4">
        <div class="area"></div><nav class="main-menu">
            <ul>
                <li>
                    <a href="/admin/">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            Dashboard
                        </span>
                    </a>
                  
                </li>
                <li class="has-subnav">
                    <a href="/admin/restaurant">
                        <i class="fa fa-laptop fa-2x"></i>
                        <span class="nav-text">
                        Restaurant
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="/admin/foodcategory">
                       <i class="fa fa-list fa-2x"></i>
                        <span class="nav-text">
                        Food Category
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="/admin/fooditem">
                       <i class="fa fa-folder-open fa-2x"></i>
                        <span class="nav-text">
                        Food Item
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a href="/logout">
                        <i class="fa fa-bar-chart-o fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>
                {/* <li>
                    <a href="#">
                        <i class="fa fa-font fa-2x"></i>
                        <span class="nav-text">
                           Quotes
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                       <i class="fa fa-table fa-2x"></i>
                        <span class="nav-text">
                        Restaurant
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i class="fa fa-map-marker fa-2x"></i>
                        <span class="nav-text">
                        Food Category
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                        Food Item
                        </span>
                    </a>
                </li> */}
            </ul>

            <ul class="logout">
                <li>
                   <a href="/logout">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
      {/* <Link to="/admin/" style={{ textDecoration: "none" }}>
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
      </Link> */}
    </div>
  );
}

export default Navigator