import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ProcessOrder() {
  const location = useLocation();
   const [deliveryboy_id, setDeliveryboy_id] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  let id = location.state.id;
  let name = location.state.name;
  let address = location.state.address;
  let amount = location.state.amount;
  let items = location.state.items;
  let vendor_id = localStorage.getItem("vendorrestaurantid");
  let navigate = useNavigate();

  let itemsarray = items.split(",");
  console.log(itemsarray);
  let consoleitems;
  for (let i = 0; i < itemsarray.length; i++) {
    consoleitems = itemsarray[i].split("+");
    console.log("consoleitems", consoleitems[0]);
  }

  const DisplayData = itemsarray.map((orders) => {
    for (let i = 0; i < itemsarray.length; i++) {
      consoleitems = itemsarray[i].split("+");
      console.log("consoleitems", consoleitems[2]);
      return (
        <tr>
          <td>{consoleitems[0]}</td>
          <td class="text-left">{consoleitems[2]}</td>
          <td class="text-left">{consoleitems[1]}</td>
        </tr>
      );
    }
  });

  console.log(itemsarray[1]);

  useEffect(() => {
    async function fetchdata() {
      let vendorid = { vendor_id };
      console.log("vendor id", vendor_id);
      let result = await fetch("http://localhost:8000/api/getdeliveryboyname", {
        method: "POST",
        body: JSON.stringify(vendorid),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      result = await result.json();
      console.log("result", result);
      setData(result);
      console.log("delivery boys", data);

      setLoading(false);
    }
    fetchdata();
  }, []);

  async function processOrder(e) {
    e.preventDefault();
    let updateorder = {
      id,
      deliveryboy_id,
    };
    console.log(updateorder);

    let result = await fetch("http://localhost:8000/api/processOrder", {
      method: "POST",
      body: JSON.stringify(updateorder),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    if (result) {
      console.log(result);
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/vendor/");
      window.location.reload(false);
    } else {
      console.log("Order Process unsuccessful");
    }
    e.target.reset();
  }

  const DisplayDeliveryBoy = data.map((boy) => {
    console.log(boy.deliveryboy_name);
    return (
      <option className="select__option" value={boy.id}>
        {boy.deliveryboy_name}
      </option>
    );
  });
  return (
    <div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <td>
              <p class="text-left">Order ID: {id}</p>
              <p class="text-left">User Name: {name}</p>
              <p class="text-left">Address to Deliver: {address}</p>
              <tr>
                <td class="text-left">Order Item:</td>
                <td class="text-left">Quantity:</td>
                <td class="text-left">Unit Price:</td>
              </tr>
              {DisplayData}
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
            </td>
          </tr>
          <tr>
            <td class="text-left">Amount</td>
            <td class="text-left">${amount}</td>
          </tr>
        </tbody>
      </table>
      <div className="pb-3 ">
        <select
          type="text"
          value={deliveryboy_id}
          onChange={(e) => setDeliveryboy_id(e.target.value)}
          className="w-50 h-25 rounded border-0 bg-light"
          style={{ zindex: "100" }}
          required="required"
        >
          <option value="" disabled selected>
            Select Delivery Boy
          </option>
          {DisplayDeliveryBoy}
        </select>
      </div>
      <div class="dropdown mr-1">
        <p>
          <a
            className="btn btn-primary mt-5 text-white"
            role="button"
            onClick={processOrder}
          >
            Approve Order
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProcessOrder;
