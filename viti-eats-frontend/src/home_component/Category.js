import React from "react";
import RestaurantCategories from "./RestaurantCategories";

function Category({ Id, Category_Name }) {
  return (
    <div className="">
      <div
        className="float-left"
        style={{ fontWeight: "bold", fontSize: "24px", fontFamily: "courier" }}
      >
        {Category_Name}
      </div>
      <div style={{ height: "40px" }}></div>
    </div>
  );
}

export default Category;
