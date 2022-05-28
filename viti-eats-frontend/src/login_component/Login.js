import logo from "../assets/logo_tab.png";
import "./Login.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  async function loginUser(e) {
    e.preventDefault();
    let user = {
      email,
      password,
    };

    let result = await fetch("http://localhost:8000/api/login", {
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
      localStorage.setItem("userid", JSON.stringify(result['userid']));
      localStorage.setItem("username", JSON.stringify(result['username']));
      localStorage.setItem("useremail", JSON.stringify(result['useremail']));
      localStorage.setItem("userrole", JSON.stringify(result['userrole']));
      localStorage.setItem("token", JSON.stringify(result['token']));
       console.log("username local storage", localStorage.getItem("userid"));
      console.log("username local storage", localStorage.getItem("username"));
      console.log("useremail local storage", localStorage.getItem("useremail"));
      console.log("userrole local storage", localStorage.getItem("userrole"));
      console.log("token  local storage", localStorage.getItem("token"));
      navigate("/");
      window.location.reload(false);
    } else {
      console.log("login");
    }
    e.target.reset();
  }

  return (
    <div className="login">
      <div className="login__left">
        <img src={logo} alt=""></img>
        <h2>Welcome to Viti Eats</h2>
        <h4>Deliver Food Instantly</h4>
        <div>
          <p>2022.Viti Eats Inc.</p>
        </div>
      </div>
      <div className="login__right">
        <form>
          <div>
            <p className="login__desc">
              Login to your account to explore our services
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
          {/* <Link to="/" style={{ textDecoration: "none" }}>
            <div>
              <button className="login__btn">Login</button>
            </div>
          </Link> */}
          <div>
            <button className="login__btn" onClick={loginUser}>
              Login
            </button>
          </div>

          <Link to="/signup" style={{ textDecoration: "none" }}>
            <div className="signup">
              <p>Click to Signup</p>
            </div>
          </Link>
          <Link to="/admin/" style={{ textDecoration: "none" }}>
            <div className="signup">
              <p>Go to Admin Panel</p>
            </div>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="signup">
              <p>Go to Home Page</p>
            </div>
          </Link>
          <Link to="/vendor/" style={{ textDecoration: "none" }}>
            <div className="signup">
              <p>Go to Vendor Page</p>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
