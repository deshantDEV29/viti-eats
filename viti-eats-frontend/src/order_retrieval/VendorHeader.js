import React from "react";
import logo from "../assets/logo_tab.png";

function VendorHeader() {
  let vendorname = localStorage.getItem("vendorname");
  vendorname = vendorname.replaceAll('"', "");
  return (
    <div>
      <div
        className="h-25 d-flex justify-content-center bg-success position-sticky top-0 align-items-center "
        style={{ zIndex: "100" }}
      >
        <img src={logo} style={{ height: "40px" }} />
        <h1 className="text-center text-white ml-2">Viti Eats Vendor Portal</h1>

        <p className="float-right text-white mr-5 mt-2" style={{position:'fixed', top:'0',right:'0'}}>{vendorname.toUpperCase()}</p>
      </div>
    </div>
  );
}

export default VendorHeader;
