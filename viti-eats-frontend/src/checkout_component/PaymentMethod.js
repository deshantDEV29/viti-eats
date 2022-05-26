import React from "react";

function PaymentMethod() {
  return (
    <div className="flex-column p-3 bg-light border border-secondary rounded mb-1">
      <h6>Payment Method</h6>
      <form className="d-flex flex-column ">
        <span className="pb-1 w-100">
          <input type="radio" value="Male" name="paymentmethod" /> Cash On Delivery
        </span>
        <span className="pb-1 w-100">
          <input type="radio" value="Male" name="paymentmethod" /> MPaisa
        </span>
      </form>
    </div>
  );
}

export default PaymentMethod;
