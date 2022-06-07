import logo from "../assets/logo_tab.png";
import "./Login.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();

  async function loginUser(e) {
    e.preventDefault();
    let user = {
      email,
      password,
    };

    let result = await fetch("http://localhost:8000/api/loginvendor", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.log("userid", result["userid"]);
    console.log("email", result["useremail"]);
    console.log("token", result["token"]);
    if (result["token"]) {
      console.log("user created");
      localStorage.setItem("vendorid", JSON.stringify(result["userid"]));
      localStorage.setItem("vendorrestaurantid",JSON.stringify(result["userrestaurantid"]) );
      localStorage.setItem("vendorname", JSON.stringify(result["username"]));
      localStorage.setItem("vendoremail", JSON.stringify(result["useremail"]));
      localStorage.setItem("vendorrole", JSON.stringify(result["userrole"]));
      localStorage.setItem("token", JSON.stringify(result["token"]));
      console.log("username local storage", localStorage.getItem("vendorid"));
      console.log("username local storage", localStorage.getItem("vendorname"));
      console.log("useremail local storage",localStorage.getItem("vendoremail"));
      console.log("userrole local storage", localStorage.getItem("vendorrole"));
      console.log("token  local storage", localStorage.getItem("token"));
      navigate("/vendor/");
      window.location.reload(false);
    } else {
      setErrorMessage("Login Unuccessful !!");
    }
    e.target.reset();
  }

  return (
    <div className="notabuyercontainer">
      <div className="notabuyercenter">
        <img src={logo} alt=""></img>
        <h2 className="text-white">Welcome to Viti Eats</h2>
        <h2 className="text-white">Vendor Portal</h2>
        <div>
          <p className="text-white">2022.Viti Eats Inc.</p>
        </div>
        <form>
          <div>
            <p className="text-white">
              Login to Start Delivering Services and Boost your Profits
            </p>
          </div>
          <div className="input__container">
            <input
              type="text"
              placeholder="Email"
              className="userinput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input__container">
            <input
              type="password"
              placeholder="Password"
              className="userinput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button className="login__btn" onClick={loginUser}>
              Login
            </button>
            {errorMessage && (
              <div className="text-warning" style={{ fontSize: "20px" }}>
                {" "}
                {errorMessage}{" "}
              </div>
            )}
          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="signup">
              <p>Go to Home Page</p>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
