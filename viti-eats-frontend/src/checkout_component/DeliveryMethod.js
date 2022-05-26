import React, { useState, useEffect } from "react";

function DeliveryMethod() {
  const [deliverymethod, setDeliverymethod] = useState("");

  return (
    <div className="d-flex flex-column justify-content-between p-3 bg-light border border-secondary rounded mb-1">
      <span className="pb-1 w-100">
        <input type="radio" value="Male" name="deliverymethod" /> Delivery
      </span>
      <span className="pb-1 w-100">
        <input type="radio" value="Male" name="deliverymethod" /> Self Pick-Up
      </span>
    </div>
  );
}

export default DeliveryMethod;
