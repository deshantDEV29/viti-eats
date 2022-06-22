import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../assets/logo_transparent.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const [{ basket }] = useStateValue();
  const [isLoading, setLoading] = useState(true);
  let navigate = useNavigate();

  let name = localStorage.getItem("username");
  let userid = localStorage.getItem("userid");
  let token = localStorage.getItem("token");

  //console.log(isLoading);

  useEffect(() => {
    if (name) {
      if (name !== "") {
        setLoading(false);
      }
    }
  }, []);

  async function logout(e) {
    token = token.replaceAll('"', "");
    e.preventDefault();

    let id = userid;
    let user_id = { id };

    console.log(token);

    console.log(user_id);
    let result = await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      console.log(result);
      localStorage.removeItem("item");
      localStorage.removeItem("userid");
      localStorage.removeItem("username");
      localStorage.removeItem("useremail");
      localStorage.removeItem("userrole");
      localStorage.removeItem("token");
      navigate("/");
      window.location.reload(false);
    } else {
      console.log("Logout Unsucessful");
    }
    e.target.reset();
  }

  function LoginOrName() {
    if (isLoading !== false) {
      return (
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="d-flex flex-column mx-4 text-white">
            <span className="d-flex">
              <p>Login</p>
            </span>
          </div>
        </Link>
      );
    } else {
      name = name.replaceAll('"', "");
      let username = "Welcome " + name;
      //console.log(username);
      return (
        <Popup
          trigger={
            <div
              className="d-flex flex-column mx-4 text-white"
              style={{ cursor: "pointer" }}
            >
              <span className="d-flex">
                <p>{username}</p>
                <p>
                  <ArrowDropDownIcon />
                </p>
              </span>
            </div>
          }
          position="bottom center"
        >
          <Link
            to="/profile"
            style={{ cursor: "pointer", textDecoration: "none" }}
            className="border-0 text-center"
          >
            <div className="text-dark" style={{ border: "none" }}>
              <p>Profile</p>
            </div>
          </Link>
          <div
            className="mt-3 text-dark text-center"
            onClick={logout}
            style={{ cursor: "pointer" }}
          >
            <span>
              <p>Logout</p>
            </span>
          </div>
        </Popup>
      );
    }
  }

  function IsProfile() {
    if (isLoading === false) {
      return (
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <div className="d-flex flex-column mx-4 text-white">
            <span className="d-flex">
              <p>{!isLoading ? "Profile" : ""}</p>
            </span>
          </div>
        </Link>
      );
    }
  }

  function IsOrders() {
    if (isLoading === false) {
      return (
        <Link to="/orders" style={{ textDecoration: "none" }}>
          <div className="d-flex flex-column mx-4 text-white">
            <span className="d-flex">
              <p>Orders</p>
            </span>
          </div>
        </Link>
      );
    }
  }

  function IsCart() {
    if (isLoading === false) {
      return (
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="d-flex flex-column mx-4 text-white">
            <span className="d-flex">
              <p className="pr-1">
                <ShoppingCartIcon />
              </p>
              {/* <p>{basket.length}</p> */}
            </span>
          </div>
        </Link>
      );
    }
  }

  return (
    <div className="h-2 d-flex align-items-center bg-danger position-sticky top-0 shadow">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div>
          <img
            className="pr-1"
            style={{ height: "100px" }}
            src={logo}
            alt=""
          ></img>
        </div>
      </Link>
      <div className="d-flex align-items-center rounded w-100 bg-white rounded">
        <input
          className="h-1 p-1 border-0 w-100 rounded text-center"
          type="text"
          placeholder="Search Food Item"
          style={{ textAlign: "right" }}
        ></input>
        <Link to="/search" style={{ textDecoration: "none" }}>
          <div>
            <SearchIcon />
          </div>
        </Link>
      </div>
      <nav className="d-flex justify-content-end w-100 navbar navbar-expand-sm navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <LoginOrName />
          <IsOrders />
          <Link to="/about" style={{ textDecoration: "none" }}>
            <div className="d-flex flex-column mx-4 text-white">
              <span className="d-flex">
                <p>About</p>
              </span>
            </div>
          </Link>
          <IsProfile />
          <IsCart />
        </div>
      </nav>
    </div>
  );
}

export default Header;
