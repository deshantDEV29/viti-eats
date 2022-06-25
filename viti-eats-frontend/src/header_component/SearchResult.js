import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import RestaurantCategories from "../home_component/RestaurantCategories";
import { Link, useNavigate } from "react-router-dom";
import ReactSpinner from "../ReactSpinner";

function SearchResult() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  let search = location.state.search;

  useEffect(() => {
    let searchterm = { search };
    console.log(searchterm);
    async function fetchdata() {
      let result = await fetch("http://localhost:8000/api/searchfooditem", {
        method: "POST",
        body: JSON.stringify(searchterm),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      result = await result.json();
      setData(result);
      console.log("searchterm", result);

      setLoading(false);
    }
    fetchdata();
  }, []);

  const DisplayData = data.map((fooditem) => {
    return (
      <div className="mr-5 col-m-6 ">
        <RestaurantCategories
          id={fooditem.id}
          name={fooditem.name}
          long_description={fooditem.long_description}
          item_price={fooditem.price}
          item_rating={"4.1"}
          item_image={fooditem.image}
        />
      </div>
    );
  });
  return (
    <div className="container">
      {!isLoading ? (
        <div className="row text">
          <h3 className="text-left mb-3">Search Results</h3>
          {DisplayData}
        </div>
      ) : (
        <ReactSpinner />
      )}
    </div>
  );
}

export default SearchResult;
