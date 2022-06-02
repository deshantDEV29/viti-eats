import React, { useState, useEffect } from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import CategoryIcon from "@mui/icons-material/Category";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

function Dashboard() {
  return (
    <div className="container-fluid">
      {/* <div className="row">
        <div className="col-sm-4" style={{ background: "#3366ff" }}>
          <span>
            <h4>Total Products</h4>
            <p>product_total</p>
          </span>
          <CategoryIcon />
        </div>
        <div className="col-sm-4" style={{ background: "#33cccc" }}>
          <span>  
            <h4>Total Suppliers</h4>
            <p>supplier_total</p>
          </span>
          <GroupsIcon />
        </div>
        
        <div className="col-sm-4" style={{ background: "#ff6666" }}>
          <span>
            <h4>Top Selling Products</h4>
            <p>Displaytopproduct</p>
          </span>
          <PointOfSaleIcon />
        </div>
      </div> */}
    </div>
  );
}

export default Dashboard;
