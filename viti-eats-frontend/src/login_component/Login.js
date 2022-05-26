import React from 'react'
import logo from '../assets/logo_tab.png'
import './Login.css'
import {Link} from "react-router-dom";

function Login() {
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
            <input type="text" placeholder="Email" className="userinput" />
          </div>
          <div className="input__container">
            <input
              type="password"
              placeholder="Password"
              className="userinput"
            />
          </div>
          <Link to="/admin/" style={{ textDecoration: "none" }}>
            <div>
              <button className="login__btn">Login</button>
            </div>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <div className="signup">
              <p>Click to Signup</p>
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

export default Login