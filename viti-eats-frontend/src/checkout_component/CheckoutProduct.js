import React from "react";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

function CheckoutProduct({ id, name, quantity, price, image }) {
  const [{}, dispatch] = useStateValue();
  let navigate = useNavigate();
  image = "data:image/png;base64," + image;

  async function removeFromBasket(e) {
    e.preventDefault();
    let cart_id = id;

    let restaurantCategories = { cart_id };
    console.log(restaurantCategories);

    let result = await fetch("http://localhost:8000/api/removefromcart", {
      method: "POST",
      body: JSON.stringify(restaurantCategories),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.log(result)
    if (result) {
      console.log(result);
      navigate("/checkout");
      window.location.reload(false);
    } else {
      console.log("product remove unsuccessful");
    }
    e.target.reset();
  }
  return (
    <div>
      <div className="d-flex mt-2 mb-2">
        <img className="" src={image} alt="" />

        <div className="pl-2">
          <p style={{ fontsize: "x-large" }}>{name}</p>
          <p>Quantity: {quantity}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>Unit Price:{price}</strong>
          </p>

          <button
            className="rounded border-0 bg-danger text-white pr-2 pl-2"
            onClick={removeFromBasket}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
