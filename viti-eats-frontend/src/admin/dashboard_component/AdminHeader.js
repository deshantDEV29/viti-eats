import React from 'react'
import './AdminHeader.css'
import logo from "./logo_tab.png";

function AdminHeader() {
  return (
    <div>
      <div
        className="h-25 d-flex justify-content-center  text-white position-sticky top-0 align-items-center"
        style={{ zIndex: "100", background: "#8A2BE2" }}
      >
        <img src={logo} style={{ height: "40px" }} />
        <h1 className="text-center text-white ml-2">Viti Eats Admin Panel</h1>
      </div>
    </div>
  );
}

export default AdminHeader;