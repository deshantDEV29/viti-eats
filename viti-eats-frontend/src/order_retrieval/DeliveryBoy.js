import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactSpinner from "./ReactSpinner";

function DeliveryBoy() {
  const [deliveryboy_name, setdeliveryboyName] = useState("");
  const [restaurant_id, setRestaurantId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  let vendor_id = localStorage.getItem("vendorrestaurantid");
  useEffect(() => {
    async function fetchdata() {
      let vendorid = { vendor_id };
      console.log("vendor id", vendor_id);
      if (vendor_id !== null) {
        let result = await fetch(
          "http://localhost:8000/api/getdeliveryboyDetails",
          {
            method: "POST",
            body: JSON.stringify(vendorid),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        result = await result.json();
        console.log("result", result);
        setData(result);
        setLoading(false);
      } else {
        navigate("/error");
      }
    }
    fetchdata();
  }, []);

  const DisplayData = data.map((fooditem) => {
    //  const toComponentMenu = () => {
    //    navigate("/menu", { state: { id: restaurant.id } });
    //  };
    return (
      <tr>
        <td className="pr-3">{fooditem.id}</td>
        <td className="pr-3">{fooditem.deliveryboy_name}</td>
        <td className="pr-3">{fooditem.email}</td>
        <td className="pr-3">{fooditem.phone}</td>
        <td className="pr-3">****</td>
        <td className="pr-3">{fooditem.created_at}</td>

        {/* <td className="pr-3">
          <button>Edit</button>
        </td> */}
        <td className="pr-3 ">
          <a
            value={fooditem.id}
            className="btn btn-primary mt-5 text-white text-center"
            role="button"
          >
            Delete
          </a>
        </td>
      </tr>
    );
  });

  async function registerDeliveryBoy(e) {
    e.preventDefault();
    let vendorid = { vendor_id };
    console.log("vendor id", vendor_id);
    let deliveryBoy = {
      vendor_id,
      deliveryboy_name,
      email,
      phone,
      password,
    };
    console.log(deliveryBoy);

    let result = await fetch("http://localhost:8000/api/registerDeliveryBoy", {
      method: "POST",
      body: JSON.stringify(deliveryBoy),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    if (result) {
      console.log(result);
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/vendor/deliveryboy");
      window.location.reload(false);
    } else {
      console.log("Food Item add unsuccessful");
    }
    e.target.reset();
  }

  return (
    <div>
      {!isLoading ? (
        <>
          <form>
            <div className="pb-3">
              <input
                type="text"
                value={deliveryboy_name}
                id="name"
                onChange={(e) => setdeliveryboyName(e.target.value)}
                placeholder="Delivery Boy Name"
                className="text-center bg-light border-0.1 rounded"
                required="required"
              />
            </div>
            <div className="pb-3">
              <input
                type="text"
                value={email}
                id="name"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="text-center bg-light border-0.1 rounded"
                required="required"
              />
            </div>
            <div className="pb-3">
              <input
                type="text"
                value={phone}
                id="name"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                className="text-center bg-light border-0.1 rounded"
                required="required"
              />
            </div>
            <div className="pb-3">
              <input
                type="text"
                value={password}
                id="name"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="text-center bg-light border-0.1 rounded"
                required="required"
              />
            </div>

            <div className="pb-3">
              <a
                className="btn btn-primary mt-5 text-white"
                onClick={registerDeliveryBoy}
              >
                Add Delivery Boy
              </a>
            </div>
          </form>
          <div className="row justify-content-center">
            <table className="text-center">
              <thead>
                <tr>
                  <th className="pr-3">ID</th>
                  <th className="pr-3">Delivery Boy Name</th>
                  <th className="pr-3">Email</th>
                  <th className="pr-3">Phone</th>
                  <th className="pr-3">Password</th>
                  <th className="pr-3">Date Created</th>
                  <th className="pr-3"></th>
                </tr>
              </thead>
              <tbody>{DisplayData}</tbody>
            </table>
          </div>
        </>
      ) : (
        <ReactSpinner />
      )}
    </div>
  );
}

export default DeliveryBoy;
