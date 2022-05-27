import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../assets/logo_transparent.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {

  const [{ basket }] = useStateValue();

  return (
    <div className="h-2 d-flex align-items-center bg-danger position-sticky top-0">
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
      <div className="d-flex align-items-center rounded w-100">
        <input
          className="h-1 p-1 border-0 w-100 rounded"
          type="text"
          placeholder="search"
          style={{ textAlign: "center" }}
        ></input>
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
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div className="d-flex flex-column mx-4 text-white">
              <span className="d-flex">
                <p>login</p>
                {/* <p><ArrowDropDownIcon/></p> */}
              </span>
            </div>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <div className="d-flex flex-column mx-4 text-white">
              <span className="d-flex">
                <p>Orders</p>
              </span>
            </div>
          </Link>

          <Link to="/about" style={{ textDecoration: "none" }}>
            <div className="d-flex flex-column mx-4 text-white">
              <span className="d-flex">
                <p>About</p>
              </span>
            </div>
          </Link>

          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <div className="d-flex flex-column mx-4 text-white">
              <span className="d-flex">
                <p className="pr-1">
                  <ShoppingCartIcon />
                </p>
                <p>{basket.length}</p>
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
