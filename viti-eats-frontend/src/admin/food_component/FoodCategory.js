import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FoodCategory() {
  const [category_description, setCategorydescription] = useState("");
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchdata() {
      let result = await fetch("http://localhost:8000/api/displayfoodcategory");
      result = await result.json();
      setData(result);
    }
    fetchdata();
  }, []);

  const DisplayData = data.map((category) => {
    //  const toComponentMenu = () => {
    //    navigate("/menu", { state: { id: restaurant.id } });
    //  };
    return (
      <tr>
        <td className="pr-3">{category.id}</td>
        <td className="pr-3">{category.category_description}</td>
        <td className="pr-3">{category.created_at}</td>
        <td className="pr-3">{category.updated_at}</td>
        <td className="pr-3">
          <button>Edit</button>
        </td>
        <td className="pr-3">
          <button>Delete</button>
        </td>
      </tr>
    );
  });

  
  async function addrestaurantk(e) {
    e.preventDefault();
    let foodcategory = { category_description };
    console.log(foodcategory);

    let result = await fetch("http://localhost:8000/api/add_foodcategory", {
      method: "POST",
      body: JSON.stringify(foodcategory),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    if (result) {
      console.log(result);
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/admin/foodcategory");
      window.location.reload(false);
    } else {
      console.log("Category add unsuccessful");
    }
    e.target.reset();
  }

  return (
    <div>
      <form>
        <div className="pb-3">
          <input
            type="text"
            value={category_description}
            id="name"
            onChange={(e) => setCategorydescription(e.target.value)}
            placeholder="Category Description"
            className="text-center bg-light border-0.1 rounded"
          />
        </div>

        <div className="pb-3">
          <button
            onClick={addrestaurantk}
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
              <th className="pr-3">Category</th>
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

export default FoodCategory;
