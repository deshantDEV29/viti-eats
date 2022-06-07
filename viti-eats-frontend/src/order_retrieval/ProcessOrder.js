import React from "react";

function ProcessOrder() {
  return (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>
              <p class="text-left">User Name: Sam</p>
              <p class="text-left">Vendor Name: Tom</p>
              <p class="text-left">Address to Deliver: Suva</p>
              <tr>
                <td class="text-left">Order Item:</td>
                <td class="text-left">Quantity:</td>
                <td class="text-left">Unit Price:</td>
              </tr>
              <tr>
                <td class="text-left">Mac</td>
                <td class="text-left">5</td>
                <td class="text-left">$4.00</td>
              </tr>
              <tr>
                <td class="text-left">Fries</td>
                <td class="text-left">4</td>
                <td class="text-left">$2.25</td>
              </tr>
              <tr>
                <td class="text-left">Chicken</td>
                <td class="text-left">3</td>
                <td class="text-left">$8.95</td>
              </tr>
            </th>
          </tr>
          <tr>
            <td class="text-left">Amount</td>
            <td class="text-left">$2.00</td>
          </tr>
        </thead>
      </table>
      <div class="dropdown mr-1">
        <select
          type="text"
          className="w-50 h-25 rounded border-0 bg-light"
          style={{ zindex: "100" }}
          placeholder="Select "
          required="required"
        >
          <option value="" disabled selected>
            Allocated Delivery Boy
          </option>
          sam
        </select>
        <p>
          <a class="btn btn-primary mt-5" href="#" role="button">
            Approve Order
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProcessOrder;
