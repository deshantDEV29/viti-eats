import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactSpinner from "../ReactSpinner";

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
  const [id, setId] = useState("");
  const [isLoading, setLoading] = useState(true);
  let navigate = useNavigate();
  let admin_id = localStorage.getItem("adminid");
  let base64String = "";

  useEffect(() => {
    async function fetchdata() {
      if (admin_id !== null) {
        let result = await fetch("http://localhost:8000/api/displayfooditem");
        result = await result.json();
        setData(result);

        let result1 = await fetch("http://localhost:8000/api/getrestaurant");
        result1 = await result1.json();
        setRestaurant_list(result1);

        let result2 = await fetch("http://localhost:8000/api/getfoodcategory");
        result2 = await result2.json();
        console.log(result2);
        setCategory_list(result2);
        console.log("category_list");
        console.log(category_list);
        setLoading(false);
        console.log("text", isLoading);
      } else {
        navigate("/error");
      }
    }
    fetchdata();
  }, []);

  async function deleterow(e) {
    e.preventDefault();

    let id = e.target.value;
    let fooditem_id = { id };

    console.log(fooditem_id);
    let result = await fetch("http://localhost:8000/api/remove_fooditem", {
      method: "POST",
      body: JSON.stringify(fooditem_id),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    if (result) {
      console.log(result);
      navigate("/admin/fooditem");
      window.location.reload(false);
    } else {
      console.log("Food Item successfully removed");
    }
    e.target.reset();
  }

  const DisplayData = data.map((fooditem) => {
    //  const toComponentMenu = () => {
    //    navigate("/menu", { state: { id: restaurant.id } });
    //  };
    return (
      <tr>
        <td className="pr-3">{fooditem.id}</td>
        <td className="pr-3">{fooditem.name}</td>
        <td className="pr-3">{fooditem.long_description}</td>
        <td className="pr-3">{fooditem.price}</td>
        <td className="pr-3">{fooditem.created_at}</td>

        {/* <td className="pr-3">
          <button>Edit</button>
        </td> */}
        <td className="pr-3">
          <button
            value={fooditem.id}
            onClick={deleterow}
            className="bg-danger text-white rounded border-0 p-1"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  function imageUploaded() {
    var file = document.querySelector("input[type=file]")["files"][0];
    var reader = new FileReader();

    reader.onload = function () {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      console.log(base64String);
      setImage(base64String);
      console.log(image);
    };
    reader.readAsDataURL(file);
  }

  const DisplayFoodCategory = category_list.map((category) => {
    return (
      <option className="select__option" value={category.id}>
        {category.category_description}
      </option>
    );
  });

  const DisplayRestaurant = restaurant_list.map((restaurant) => {
    return (
      <option className="select__option" value={restaurant.id}>
        {restaurant.restaurantname}
      </option>
    );
  });

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
       alert("Food Item  Added Successfully");
    } else {
      console.log("Food Item add unsuccessful");
    }
    e.target.reset();
  }

  return (
    <div>
      {!isLoading ? (
        <>
          <form>
            <div className="pb-3">
              <input
                type="text"
                value={name}
                id="Meal"
                onChange={(e) => setName(e.target.value)}
                placeholder="Meal"
                className="text-center bg-light border-0.1 rounded"
                required="required"
              />
            </div>
            <div className="pb-3">
              <input
                type="text"
                value={long_description}
                id="name"
                onChange={(e) => setLong_description(e.target.value)}
                placeholder="Description"
                className="text-center bg-light border-0.1 rounded"
                required="required"
              />
            </div>

            <div className="pb-3 ">
              <label className="form-label">Select Image for Food Item</label>
              <input
                type="file"
                id="shortimage"
                onChange={imageUploaded}
                className="form-control w-50 m-auto p-1 border-0"
                required="required"
              />
            </div>

            <div className="pb-3 ">
              <select
                type="text"
                value={foodcategory_id}
                onChange={(e) => setFoodcategory_id(e.target.value)}
                className="w-50 h-25 rounded border-0 bg-light"
                style={{ zindex: "100" }}
                required="required"
              >
                <option value="" disabled selected>
                  Select Food Category
                </option>
                {DisplayFoodCategory}
              </select>
            </div>
            <div className="pb-3 ">
              <select
                type="text"
                value={restaurants_id}
                onChange={(e) => setRestaurants_id(e.target.value)}
                className="w-50 h-25 rounded border-0 bg-light"
                style={{ zindex: "100" }}
                required="required"
              >
                <option value="" disabled selected>
                  Select Restaurant
                </option>
                {DisplayRestaurant}
              </select>
            </div>

            <div className="pb-3">
              <label className="form-label pr-3">Price</label>
              <input
                type="number"
                min="0"
                max="50"
                step="1"
                name="Broker_Fees"
                id="broker_fees"
                required="required"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="text-center bg-light border-0.1 rounded"
              ></input>
            </div>

            <div className="pb-3">
              <button
                onClick={add_food_item}
                className="bg-success pl-3 pr-3 text-white rounded border-0"
              >
                Add Meal
              </button>
            </div>
          </form>
          <h1 className="pb-3">Meal Details </h1>
          <div className="row justify-content-center">
            <table className="text-center">
              <thead>
                <tr>
                  <th className="pr-3">ID</th>
                  <th className="pr-3">Food Item</th>
                  <th className="pr-3">Description</th>
                  <th className="pr-3">Price</th>
                  <th className="pr-3">Date Created</th>
                </tr>
              </thead>
              <tbody>{DisplayData}</tbody>
            </table>
          </div>
        </>
      ) : (
        <ReactSpinner />
      )}
    </div>
  );
}

export default FoodItem;
