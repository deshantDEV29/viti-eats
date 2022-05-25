import React from "react";

function DeliveryMethod() {

  
  return (
    <div className="d-flex flex-column justify-content-between p-3 bg-light border border-secondary rounded mb-1">
      <span className="pb-1 w-100">
        <button
          type="submit"
          className="w-100 rounded btn btn-warning text-white border-0"
          value={'delivery'}
        >
          Delivery
        </button>
      </span>
      <span className="pb-1 w-100">
        <button
          type="submit"
          className="w-100 rounded  btn btn-warning text-white border-0"
          value={'self pickup'}
        >
          Self Pickup
        </button>
      </span>
    </div>
  );
}

export default DeliveryMethod;
