import { height } from "@mui/system";
import React from "react";

import "./restaurant.css";


function Restaurant({ id, restaurant_name, image, rating }) {
  image = "data:image/png;base64," + image;
  return (
    <div className="">
      <div class="container">

        <div class="row">
          <div class="">
            <div class="card card-block" style={{height:"275px"}}>
              {/* <h4 class="card-title text-right"><i class="material-icons">settings</i></h4> */}
              <img src={image} alt="Photo of sunset" style={{ height:"150px", width:"100%"}}></img>
              <h5 class="card-title mt-3 mb-3" style={{ fontFamily: "cursive" }}>{restaurant_name}</h5>
              <p class="card-text" style={{ fontFamily: "cursive" }}>Rating {rating} ⭐</p>
            </div>
          </div>
         
         
        </div>

      </div>






      
    </div>
  );
}

export default Restaurant;
