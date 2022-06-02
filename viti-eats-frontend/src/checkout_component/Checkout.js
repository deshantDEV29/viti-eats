import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";
import AddressDetails from "./AddressDetails";
import React, { useState, useEffect } from "react";
import { getBasketTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";
import emptycart from "../assets/emptycart.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Subtotal from "./Subtotal";
import DeliveryMethod from "./DeliveryMethod";
import PaymentMethod from "./PaymentMethod";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [deliverymethod, setDeliverymethod] = useState("");
  const [cartempty, setCartempty] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    if (basket) {
      if (basket.length !== 0) {
        setCartempty(false);
        console.log("Is cart Empty", cartempty);
      }
    }
    console.log(basket.length);
  }, []);

  function CartNotEmpty() {
    if (cartempty === true) {
      return (
        <div className="container">
          <div
            className="row justify-content-around m-2 rounded w-100"
            style={{ border: "1px solid", borderColor: "grey" }}
          >
            <div className="column w-25 p-4">
              <img src={emptycart} alt="" />
              <h5>Your Cart is Empty</h5>
              <Link to="/" style={{ color: "red" }}>
                <p>Continue</p>
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <div className="row justify-content-around">
            <div className="column p-3 ml-3 ">
              <h2 className="pb-2">Your Shopping Basket</h2>

              <div>
                {basket.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    name={item.name}
                    image={item.item_image}
                    price={item.item_price}
                  />
                ))}
              </div>
            </div>
            <div className="column w-25">
              <div className="d-flex flex-column justify-content-between p-3 bg-light border border-secondary rounded mb-1">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Subtotal ({basket.length} items):{" "}
                        <strong>{value}</strong>
                      </p>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"$"}
                />
              </div>

              <AddressDetails />

              <div className="d-flex flex-column justify-content-between p-3 bg-light border border-secondary rounded mb-1">
                <span className="pb-1 w-100">
                  <input
                    type="radio"
                    value="Delivery"
                    name="deliverymethod"
                    onChange={(e) => setDeliverymethod(e.target.value)}
                  />
                  Delivery
                  <input
                    type="radio"
                    value="PickUp"
                    name="deliverymethod"
                    onChange={(e) => setDeliverymethod(e.target.value)}
                  />
                  Self PickUp
                </span>
              </div>
              <button className="rounded p-3 border-0 mt-1 mb-2 bg-success text-white p-1">
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  async function placeOrder(e) {
    console.log(deliverymethod, "cart", basket);
    navigate("/mpaisa");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 m-2 p-3">
          <h2 className="pb-2">Your Shopping Basket</h2>

          <div>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                name={item.name}
                image={item.item_image}
                price={item.item_price}
              />
            ))}
          </div>
        </div>
        <div className="col-4 m-1 w-25">
          <div className="d-flex flex-column justify-content-between p-3 bg-light border border-secondary rounded mb-1">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                  </p>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeperator={true}
              prefix={"$"}
            />
          </div>

          <AddressDetails />

          <div className="flex-column justify-content-between p-3 bg-light border border-secondary rounded mb-1">
            <div className="pb-1 w-100">
              <input
                type="radio"
                value="Delivery"
                name="deliverymethod"
                onChange={(e) => setDeliverymethod(e.target.value)}
              />
              Delivery
            </div>
            <div className="pb-1 w-100">
              <input
                type="radio"
                value="PickUp"
                name="deliverymethod"
                onChange={(e) => setDeliverymethod(e.target.value)}
              />
              Self PickUp
            </div>
          </div>
          <button className="rounded p-3 border-0 mt-1 mb-2 bg-success text-white p-1">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
