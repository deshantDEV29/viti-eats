import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactSpinner from "../ReactSpinner";

function Restaurant() {
  const [name, setName] = useState("");
  const [shortimage, setShortimage] = useState("");
  const [longimage, setLongimage] = useState("");
  const [id, setId] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  let base64String = "";
  let base64String2 = "";

  useEffect(() => {
    async function fetchdata() {
      let result = await fetch(
        "http://localhost:8000/api/displaylistrestaurant"
      );
      result = await result.json();
      setData(result);
      setLoading(false);
    }
    fetchdata();
  }, []);

  async function deleterow(e) {
    e.preventDefault();

    let id = e.target.value;
    let restaurant_id = {id};
   
    console.log(restaurant_id);
    let result = await fetch("http://localhost:8000/api/removerestaurant", {
      method: "POST",
      body: JSON.stringify(restaurant_id),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    if (result) {
      console.log(result);
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/admin/restaurant");
      window.location.reload(false);
    } else {
      console.log("restaurant add unsuccessful");
    }
    e.target.reset();
  }

  const DisplayData = data.map((restaurant) => {

    return (
      <tr key={restaurant.id}>
        <td className="pr-3">{restaurant.id}</td>
        <td className="pr-3">{restaurant.name}</td>
        <td className="pr-3">{restaurant.created_at}</td>
        <td className="pr-3">{restaurant.updated_at}</td>
        {/* <td className="pr-3">
          <button>Edit</button>
        </td> */}
        <td className="pr-3">
          <button value={restaurant.id} onClick={deleterow}>
            Delete
          </button>
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

  function longimageUploaded() {
    var file = document.querySelector("input[type=file]")["files"][0];
    var reader = new FileReader();

    reader.onload = function () {
      base64String2 = reader.result.replace("data:", "").replace(/^.+,/, "");
      console.log(base64String2);
      setLongimage(base64String2);
      console.log(longimage);
    };
    reader.readAsDataURL(file);
  }

  async function addrestaurantk(e) {
    e.preventDefault();
    let restaurant = { name, shortimage, longimage };
    console.log(restaurant);

    let result = await fetch("http://localhost:8000/api/addrestaurant", {
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
      navigate("/admin/restaurant");
      window.location.reload(false);
    } else {
      console.log("restaurant add unsuccessful");
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
            className="text-center bg-light border-1 rounded"
          />
        </div>

        <div className="pb-3 ">
          <label className="form-label">Select a Short Image</label>
          <input
            type="file"
            id="shortimage"
            onChange={shortimageUploaded}
            className="form-control w-25 m-auto w-50 h-25 rounded border-0 bg-light"
          />
        </div>

        <div className="pb-3">
          <label className="form-label">Select a Long Image</label>
          <input
            type="file"
            id="longimage"
            onChange={longimageUploaded}
            className="form-control w-25 m-auto w-50 h-25 rounded border-0 bg-light"
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
              <th className="pr-3">Restaurant Name</th>
              <th className="pr-3">Date Created</th>
              <th className="pr-3">Date Updated</th>
              <th className="pr-3"></th>
              <th className="pr-3"></th>
            </tr>
          </thead>
          <tbody>{!isLoading ? DisplayData : <ReactSpinner />}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Restaurant;
