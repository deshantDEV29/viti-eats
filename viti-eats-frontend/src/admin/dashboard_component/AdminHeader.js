import React from 'react'
import './AdminHeader.css'

function AdminHeader() {
  return (
    <div>
      <div
        className="h-25 d-flex justify-content-center bg-primary text-white position-sticky top-0 "
        style={{ zIndex: "100" }}
      >
        <h1 className="text-center text-white">Viti Eats Admin Panel</h1>
      </div>
    </div>
  );
}

export default AdminHeader;