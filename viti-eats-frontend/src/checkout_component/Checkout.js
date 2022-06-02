import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";
import Subtotal from "./Subtotal";
import DeliveryMethod from "./DeliveryMethod";
import AddressDetails from "./AddressDetails";
import PaymentMethod from "./PaymentMethod";
import React, { useState, useEffect } from "react";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const add_address = () => {
    setName(name);
    setAddress(address);
    setContact(contact);
    console.log(name);
    console.log(address);
    console.log(contact);

  };

  

  return (
    <div className="row justify-content-around ">
      <div className="col-md-8 container">
        {/* <h2 className="pb-2">Your Shopping Basket</h2> */}

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
      <div className="col-md-4">
        <Subtotal />
        <DeliveryMethod />
        <AddressDetails
          onClick={add_address}
          name={name}
          address={address}
          contact={contact}
        />
        <PaymentMethod />
        <button className="rounded p-3 border-0 mt-1 mb-2 bg-success text-white p-1 ">
          PLACE ORDER
        </button>
      </div>
      <div class="row">
 
</div>
    </div>
    
  );
}

export default Checkout;
