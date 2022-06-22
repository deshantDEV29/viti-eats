import React from "react";

function RestaurantInfo({ id, name, address, rating, review, email, image }) {
  image = "data:image/png;base64," + image;
  return (
    <div>
      <div className="text-left">
        <img
          className="rounded img-fluid"
          src={image}
          style={{ height: "100%", width: "200%",  }}
          alt=""
        />
        <div style={{ height: "5px" }}></div>
        <div>
          <span
            className="text-left bolder"
            style={{
              fontFamily: "Gilroy",
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            {name}
          </span>
          <button type="button" className="btn btn-success float-right">
            6.8
          </button>
        </div>
        <span className="float-left">
          Corner of Enamanu Road &, Queens Rd, Nadi, Fiji
        </span>{" "}
        <span className="float-right">{60} Reviews</span>
        <br></br>
        <p>Email: marketing@mcdonalds.com.fj</p>
      </div>
    </div>
  );
}

export default RestaurantInfo;
