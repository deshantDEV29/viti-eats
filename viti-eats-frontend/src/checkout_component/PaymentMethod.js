import React from "react";

function PaymentMethod() {
  return (
    <div className="flex-column p-3 bg-light border border-secondary rounded mb-1">
      <h6>Payment Method</h6>
      <form className="d-flex flex-column ">
        <div className="pull-left ">
          <div>
            <input type="radio"></input>
            <label>Cash On Delivery</label>
          </div>
          <div>
            <input type="radio"></input>
            <label>MPaisa</label>
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default PaymentMethod;
