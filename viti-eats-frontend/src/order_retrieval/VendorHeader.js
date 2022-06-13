import React from 'react'

function VendorHeader() {
  return (
    <div>
      <div
        className="h-25 d-flex justify-content-center bg-success position-sticky top-0 "
        style={{ zIndex: "100" }}
      >
        <h1 className="text-center text-white">Viti Eats Vendor Portal</h1>
      </div>
    </div>
  );
}

export default VendorHeader