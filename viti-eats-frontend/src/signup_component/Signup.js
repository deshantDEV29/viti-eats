import logo from "../assets/logo_tab.png";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  async function createUser(e) {
    e.preventDefault();
    let user = {
      name,
      email,
      phone,
      password,
    };
    

    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.log("username", result["username"]);
    console.log("email", result["useremail"]);
    console.log('token',result['token'])
    if (result['token']) {
      console.log('user created');
      localStorage.setItem("user-info", JSON.stringify(result));
      console.log('user',localStorage.getItem('user-info'))
      // navigate("/");
      // window.location.reload(false);
    } else {
      console.log("User create unsuccessful");
    }
    // e.target.reset();
  }

  return (
    <div className="signup__div">
      <div className="signup__left">
        <img className="image" src={logo} alt=""></img>
        <h2>Welcome to Viti Eats</h2>
        <h4>Deliver Food Instantly</h4>
        <div>
          <p>2022.Viti Eats Inc.</p>
        </div>
      </div>
      <div className="signup__right">
        <form>
          <div>
            <p className="signup__desc">
              Signup to explore our services and the tools we offer
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="usersignup"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="usersignup"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone"
              className="usersignup"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="input__container">
            <input
              type="password"
              placeholder="Password"
              className="usersignup"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <Link to="/" style={{ textDecoration: "none" }}>
            <div>
              <button className="signup__btn">Signup</button>
            </div>
          </Link> */}
          <div>
            <button className="signup__btn" onClick={createUser}>
              Signup
            </button>
          </div>
          {/* <Link to="/login" style={{ textDecoration: "none" }}>
            <div className="login__link">
              <p>Click to Login</p>
            </div>
          </Link> */}
        </form>
      </div>
    </div>
  );
}

export default Signup;
