import React from "react";

function Restaurant({ id, restaurant_name, image, rating }) {
  image = "data:image/png;base64," + image;
  return (
    <div className="p-1 text-body container">
      <h4>{restaurant_name}</h4>
      <div style={{ height:"100px",width:"150px", overflow: "hidden", }}>
        <img
          src={image}
          alt=""
          style={{ width: "inherit",height:"inherit", objectfit: "contain" }}
        />
      </div>
      <h5>Rating {rating} ⭐</h5>
    </div>
  );
}

export default Restaurant;
