import React, { useState, useEffect } from "react";
import RestaurantInfo from "./RestaurantInfo";
import Category from "./Category";
import ReactSpinner from "../ReactSpinner";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function Menu() {
  const location = useLocation();

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let id = location.state.id;
    let restaurantid = { id };
    async function fetchdata() {
      let result = await fetch(
        "http://localhost:8000/api/getrestaurantdetails",
        {
          method: "POST",
          body: JSON.stringify(restaurantid),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      result = await result.json();
      console.log(result)
      setData(result);
      setLoading(false);

      console.log(data);
    }
    fetchdata();
  }, []);

  const DisplayData = data.map((restaurant_details) => {
    
    return (
      <RestaurantInfo
        id={restaurant_details.id}
        name={restaurant_details.name}
        image={restaurant_details.longimage}
      />
    );
  });

  return (
    <div>
      <div>{location.state.id}</div>
      <div className="container mt-0 ">
        <div className="d-sm-flex justify-content-center p-2 col">
          <div>{DisplayData}</div>
        </div>

        <Category Category_Name={"Promotion"} />
      </div>
    </div>
  );
}

export default Menu;
