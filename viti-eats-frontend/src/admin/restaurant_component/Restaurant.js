import { ConfirmationNumberSharp } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactSpinner from "../ReactSpinner";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
// function componentDidMount() {

//     $(document).ready(function () {
//       $('#example').DataTable();
//     });
//   }
function Restaurant() {
  const [restaurantname, setName] = useState("");
  const [shortimage, setShortimage] = useState("");
  const [longimage, setLongimage] = useState("");
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
    let restaurant_id = { id };

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
        <td className="pr-3">{restaurant.restaurantname}</td>
        <td className="pr-3">{restaurant.created_at}</td>
        <td className="pr-3">{restaurant.updated_at}</td>
        {/* <td className="pr-3">
          <button>Edit</button>
        </td> */}
        <td className="pr-3">
          <button
            value={restaurant.id}
            onClick={deleterow}
            className="bg-danger text-white rounded border-0 p-1"
          >
            Delete
          </button>
        </td>
        <td></td>
      </tr>
    );
  });

  function shortimageUploaded() {
    var file = document.querySelector("input[type=file]")["files"][0];
    var reader = new FileReader();

    reader.onload = function () {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      setShortimage(base64String);
      // console.log(base64String);
    };
    reader.readAsDataURL(file);
    // console.log(shortimage)
  }

  const longimageUploaded = (e) => {
    e.preventDefault();
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function () {
      base64String2 = reader.result.replace("data:", "").replace(/^.+,/, "");
      setLongimage(base64String2);
      // console.log(base64String2);
    };
    reader.readAsDataURL(file);
    // console.log(longimage);
  };

  async function addrestaurantk(e) {
    e.preventDefault();
    let restaurant = { restaurantname, shortimage, longimage };
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
      {!isLoading ? (
        <>
          <form>
            <div className="pb-3">
              <label
                className="float-left mx-5"
                style={{ fontFamily: "cursive" }}
              >
                Restaurant Name :<span className="mx-3"></span>
              </label>
              <input
                style={{ width: "400px" }}
                type="text"
                value={restaurantname}
                id="name"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="pb-3 ">
              <label
                className="float-left mx-5"
                style={{ fontFamily: "cursive" }}
              >
                Select a Short Image:
              </label>
              <input
                style={{ width: "400px" }}
                type="file"
                id="shortimage"
                onChange={shortimageUploaded}
                className="form-control"
              />
            </div>

            <div className="pb-3 ">
              <label
                className="float-left mx-5"
                style={{ fontFamily: "cursive" }}
              >
                Select a Long Image: <span className="mx-1"></span>
              </label>
              <input
                style={{ width: "400px" }}
                type="file"
                id="longimage"
                onChange={longimageUploaded}
                className="form-control"
              />
            </div>

            <div className="pb-3">
              <button
                onClick={addrestaurantk}
                className="bg-success pl-3 pr-3 text-white rounded border-0"
              >
                Add Restaurant
              </button>
            </div>
          </form>
          <h1 className="pb-3">Restaurant Details </h1>
          <div className="row justify-content-center">
            <table className="text-center" class="display">
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
        </>
      ) : (
        <ReactSpinner />
      )}
    </div>
  );
}

export default Restaurant;
