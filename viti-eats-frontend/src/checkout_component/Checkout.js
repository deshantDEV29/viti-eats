import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";
import Subtotal from "./Subtotal";
import DeliveryMethod from "./DeliveryMethod";
import AddressDetails from "./AddressDetails";
import PaymentMethod from "./PaymentMethod";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
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
        <Subtotal />
        <DeliveryMethod />
        <AddressDetails />
        <PaymentMethod />
        <button className="rounded p-3 border-0 mt-1 mb-2 bg-success text-white p-1">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}

export default Checkout;
