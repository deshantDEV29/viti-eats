import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FoodItem() {
  const [name, setName] = useState("");
  const [long_description, setLong_description] = useState("");
  const [image, setImage] = useState("");
  const [foodcategory_id, setFoodcategory_id] = useState("");
  const [restaurants_id, setRestaurants_id] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState([]);
  const [restaurant_list, setRestaurant_list] = useState([]);
  const [category_list, setCategory_list] = useState([]);
  let navigate = useNavigate();

  let base64String = "";

  useEffect(() => {
    async function fetchdata() {
      let result = await fetch("http://localhost:8000/api/displayfooditem");
      result = await result.json();
      setData(result);

      let result1 = await fetch("http://localhost:8000/api/displayfooditem");
      result1 = await result1.json();
      setRestaurant_list(result1);

      let result2 = await fetch("http://localhost:8000/api/displayfooditem");
      result2 = await result2.json();
      setCategory_list(result2);
    }
    fetchdata();
  }, []);

  const DisplayData = data.map((restaurant) => {
    //  const toComponentMenu = () => {
    //    navigate("/menu", { state: { id: restaurant.id } });
    //  };
    return (
      <tr>
        <td className="pr-3">{restaurant.id}</td>
        <td className="pr-3">{restaurant.name}</td>
        <td className="pr-3">{restaurant.long_description}</td>
        <td className="pr-3">{restaurant.image}</td>
        <td className="pr-3">{restaurant.foodcategory_id}</td>
        <td className="pr-3">{restaurant.restaurants_id}</td>
        <td className="pr-3">{restaurant.price}</td>
        <td className="pr-3">{restaurant.created_at}</td>
        <td className="pr-3">{restaurant.updated_at}</td>
        <td className="pr-3">
          <button>Edit</button>
        </td>
        <td className="pr-3">
          <button>Delete</button>
        </td>
      </tr>
    );
  });

  function shortimageUploaded() {
    var file = document.querySelector("input[type=file]")["files"][0];
    var reader = new FileReader();

    reader.onload = function () {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      console.log(base64String);
      setShortimage(base64String);
      console.log(shortimage);
    };
    reader.readAsDataURL(file);
  }

  async function add_food_item(e) {
    e.preventDefault();
    let restaurant = {
      name,
      long_description,
      image,
      foodcategory_id,
      restaurants_id,
      price,
    };
    console.log(restaurant);

    let result = await fetch("http://localhost:8000/api/add_fooditem", {
      method: "POST",
      body: JSON.stringify(restaurant),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    if (result) {
      console.log(result);
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/admin/fooditem");
      window.location.reload(false);
    } else {
      console.log("Food Item add unsuccessful");
    }
    e.target.reset();
  }

  return (
    <div>
      <form>
        <div className="pb-3">
          <input
            type="text"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Restaurant Name"
            className="text-center bg-light border-0.1 rounded"
          />
        </div>

        <div className="pb-3 ">
          <label className="form-label">Select a Short Image</label>
          <input
            type="file"
            id="shortimage"
            onChange={shortimageUploaded}
            className="form-control w-25 m-auto"
          />
        </div>

        <div className="pb-3">
          <label className="form-label">Select a Long Image</label>
          <input
            type="file"
            id="longimage"
            onChange={longimageUploaded}
            className="form-control w-25 m-auto"
          />
        </div>

        <div className="pb-3">
          <button
            onClick={add_food_item}
            className="bg-secondary text-white rounded border-0"
          >
            Add
          </button>
        </div>
      </form>
      <h1 className="pb-3">Restaurant Details </h1>
      <div className="row justify-content-center">
        <table className="text-center">
          <thead>
            <tr>
              <th className="pr-3">ID</th>
              <th className="pr-3">Restaurant Name</th>
              <th className="pr-3">Date Created</th>
              <th className="pr-3">Date Updated</th>
              <th className="pr-3"></th>
              <th className="pr-3"></th>
            </tr>
          </thead>
          <tbody>{DisplayData}</tbody>
        </table>
      </div>
    </div>
  );
}

export default FoodItem;
