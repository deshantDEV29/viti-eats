import React from "react";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function RestaurantCategories({
  id,
  name,
  long_description,
  item_rating,
  item_price,
  item_image,
}) {
  const [isLoading, setLoading] = useState(true);
  let uname = localStorage.getItem("username");

  useEffect(() => {
    if (uname) {
      if (uname !== "") {
        setLoading(false);
      }
    }
  }, []);

  item_image = "data:image/png;base64," + item_image;
  let navigate = useNavigate();

  const [{ basket }, dispatch] = useStateValue();

  async function addToBasket(e) {
    e.preventDefault();
    let user_id = localStorage.getItem("userid"); //  localStorage.getItem("userid");
    user_id = parseInt(user_id.substring(0), 10);
    let food_id = id;

    let restaurantCategories = { user_id, food_id };
    console.log(restaurantCategories);

    let result = await fetch("http://localhost:8000/api/addtocart", {
      method: "POST",
      body: JSON.stringify(restaurantCategories),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    if (result) {
      console.log(result);
      //window.location.reload(true);
    } else {
      console.log(" add unsuccessful");
    }
    e.target.reset();
  }

  function LoginOrName() {
    if (isLoading !== false) {
      return (
        <div
          className="mt-3 text-dark text-center"
          // onClick={}
          style={{ cursor: "pointer" }}
        >
          <a className=""></a>
        </div>
      );
    } else {
      return (
        <div
          className="mt-3 text-dark text-center"
          // onClick={}
          style={{ cursor: "pointer" }}
        >
          <button type="button" class="btn btn-danger" onClick={addToBasket}>
            ADD
          </button>
        </div>
      );
    }
  }

  return (
    <div className="">
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body h-100">
              <div className="float-left w-25 h-50">
                {" "}
                <img className="rounded img-fluid" src={item_image} alt="" />
              </div>
              <div
                className="float-left w-75"
                style={{ fontWeight: "", fontSize: "18px", fontFamily: "" }}
              >
                <div className="float-left" style={{ fontWeight: "bold" }}>
                  {name}
                </div>
                <br></br>
                <br></br>
                <div style={{ fontWeight: "lighter" }}>
                  <span
                    className="float-left"
                    style={{ fontSize: "14px", fontWeight: "lighter" }}
                  >
                    {long_description}
                  </span>

                  <span
                    className="float-right"
                    style={{ fontSize: "14px", fontWeight: "lighter" }}
                  >
                    ⭐{item_rating}
                  </span>
                </div>

                <br></br>
                <div style={{ fontWeight: "lighter" }}>
                  <span
                    className="float-left text-success"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    FJD$ {item_price}
                  </span>
                  <span
                    className="float-right"
                    style={{ fontSize: "14px", fontWeight: "lighter" }}
                  >
                    <LoginOrName />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "20px" }}></div>
    </div>
  );
}

export default RestaurantCategories;
