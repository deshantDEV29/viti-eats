import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="row">
      <div className="column p-3 ml-3">
        <h2 className="">Your Shopping Basket</h2>

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
      <div className="column">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
