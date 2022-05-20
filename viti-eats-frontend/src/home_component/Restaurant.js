import React from "react";

function Restaurant({ id, restaurant_name, image, rating }) {
  image = "data:image/png;base64,"+image;
  return (
    <div className="p-1 text-body container col">
      <h4>{restaurant_name}</h4>
      <img src={image} alt="" style={{ height: "150px", width: "100%" }} />
      <h5>Rating {rating} ⭐</h5>
    </div>
  );
}

export default Restaurant;
