import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchdata() {
      let result = await fetch("http://localhost:8000/api/displayrestaurant");
      result = await result.json();
      setData(result);
      console.log(result);
      console.log("test", data);
    }
    fetchdata();
  }, []);

  const DisplayData = data.map((restaurant) => {
    const toComponentMenu = () => {
      navigate("/menu", { state: { id: restaurant.id } });
    };
    return (
      <div className="d-sm-flex justify-content-center p-2">
        <div
          className="rounded-lg"
          onClick={() => {
            toComponentMenu();
          }}
        >
          <Restaurant
            id={restaurant.id}
            restaurant_name={restaurant.name}
            image={restaurant.shortimage}
          />
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="bg-white m-5 rounded">{DisplayData}</div>
    </div>
  );
}

export default Home;
