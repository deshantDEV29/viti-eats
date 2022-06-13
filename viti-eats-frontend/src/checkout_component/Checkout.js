import CheckoutProduct from "./CheckoutProduct";
import AddressDetails from "./AddressDetails";
import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import emptycart from "../assets/emptycart.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactSpinner from "../ReactSpinner";

function Checkout() {
  const [address, setAddress] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [cartdata, setCartData] = useState([]);
  let navigate = useNavigate();
  let user_id = localStorage.getItem("userid");

  useEffect(() => {
    setAddress(localStorage.getItem("address"));

    async function fetchdata() {
      let userid = { user_id };

      try {
        let result = await fetch("http://localhost:8000/api/displaycart", {
          method: "POST",
          body: JSON.stringify(userid),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        result = await result.json();
        setCartData(result);
        setIsEmpty(false);
        setLoading(false);

        console.log("check before call", isEmpty);
        console.log("check if loading before call", isLoading);
      } catch (error) {
        setIsEmpty(true);
        setLoading(false);
        console.log(error);
      }
      console.log("is empty", isEmpty);
    }

    fetchdata();
  }, []);

  function groupBy(data, key) {
    return data.reduce(function (acc, item) {
      (acc[item[key]] = acc[item[key]] || []).push(item);
      return acc;
    }, {});
  }

  let groupedfooddata = groupBy(cartdata, "restaurantname");
  //console.log(groupedfooddata);

  let foodItem = Object.keys(groupedfooddata).map((key) => {
    let cost = groupedfooddata[key].map((item) => item.price * item.quantity);
    let cart_id = groupedfooddata[key].map((item) => item.id);
    let amount = 0;
    let total_items = 0;
    for (let i = 0; i < cost.length; i++) {
      amount += cost[i];
      total_items++;
    }

    let items = groupedfooddata[key].map(
      (item) =>
        item.name +
        "+" +
        item.price +
        "+" +
        item.quantity +
        "+" +
        item.price * item.quantity
    );

    let restaurant = groupedfooddata[key].map((item) => item.restaurants_id);

    let restaurant_id = restaurant[0];

    let food_items = items.toString();

    let orderDetails = { user_id, restaurant_id, address, food_items, amount };
    let cartid = { cart_id };
    const toComponentmpaisa = () => {
      navigate("/mpaisa", { state: { id: cartid, orderDetails, amount } });
      // console.log(orderDetails);
      // console.log(cart_id);
    };

    console.log("is empty before print", isEmpty);
    return (
      <div className="container ">
        <div className="row border m-1 shadow mb-3">
          <div className="col-8 m-2 p-3 ">
            <div key={key}>
              <h3>{key}</h3>
              {groupedfooddata[key].map((item) => (
                <CheckoutProduct
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </div>
          </div>
          <div className="col-4 m-1 w-25">
            <div className="d-flex flex-column justify-content-between p-3 bg-light border border-secondary rounded mb-1 mt-5">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p>
                      Subtotal ({total_items} items): <strong>{value}</strong>
                    </p>
                  </>
                )}
                decimalScale={2}
                value={amount}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
              />
            </div>
            <button
              className="rounded p-3 border-0 mt-1 mb-2 bg-success text-white p-1"
              value={key}
              onClick={() => {
                toComponentmpaisa();
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    );
  });

  function CheckifEmpty() {
    if (isEmpty !== true) {
      return foodItem;
    } else {
      console.log("is empty before print", isEmpty);
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
                <p>Continue Shopping</p>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="container">
      <div className="row "></div>
      <div className="row">
        <h2 className="pb-2">Your Shopping Basket</h2>
        {/* <CheckifEmpty/> */}
        {!isLoading ? (
          <div>
            <AddressDetails className='w-100'/>
            <CheckifEmpty />
          </div>
        ) : (
          <ReactSpinner />
        )}
      </div>
      <div className="col-4 m-1 w-25"></div>
    </div>
  );
}

export default Checkout;
