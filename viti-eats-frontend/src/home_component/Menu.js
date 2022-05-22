import React, { useState, useEffect } from "react";
import RestaurantInfo from "./RestaurantInfo";
import Category from "./Category";
import ReactSpinner from "../ReactSpinner";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";

function Menu() {
  const location = useLocation();

  const [data, setData] = useState([]);
  const [fooddata, setFoodData] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  let id = location.state.id;

  useEffect(() => {
    let restaurantid = { id };
    console.log(restaurantid);
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
      setData(result);
      console.log("restaurant", data);

      let result1 = await fetch("http://localhost:8000/api/getrestaurantfood", {
        method: "POST",
        body: JSON.stringify(restaurantid),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      result1 = await result1.json();
      setFoodData(result1);
      console.log("fooditem", fooddata);

      setLoading(false);
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

  const DisplayfoodData = fooddata.map((fooditem) => {
    return <Category Id={fooditem.id} Category_Name={fooditem.name} />;
  });

  function groupBy(data, key) {
    return data.reduce(function (acc, item) {
      (acc[item[key]] = acc[item[key]] || []).push(item);
      return acc;
    }, {});
  }

  let groupedfooddata = groupBy(fooddata, "category_description");
  console.log(groupedfooddata);

  let foodItem = Object.keys(groupedfooddata).map((key => {
    return (
      <div key={key}>
        <h1>
          <Category Category_Name={key} />
          
        </h1>
        {groupedfooddata[key].map((fooditem) => (
          <RestaurantCategories
            name={fooditem.name}
            long_description={fooditem.long_description}
            item_price={fooditem.price}
            item_rating={"4.1"}
            item_image={fooditem.image}
          />
        ))}
      </div>
    );
  }));

  return (
    <div>
      <div className="container mt-0 ">
        <div className="d-sm-flex justify-content-center p-2 col">
          {id}
          <div>{!isLoading ? DisplayData : <ReactSpinner />}</div>
        </div>
        <div>{foodItem}</div>
      </div>
    </div>
  );
}

export default Menu;
