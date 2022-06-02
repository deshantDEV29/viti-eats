import React from 'react'
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, name, price, image }) {
  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div>
      <div className="d-flex mt-2 mb-2">
        <img className="" src={image} alt="" />

        <div className="pl-2">
          <p style={{ fontsize: "x-large" }}>{name}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <button
            className="rounded border-0 bg-danger text-white p-1"
            onClick={removeFromBasket}
          >
            Remove from Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct