import React from 'react'
import { useLocation } from "react-router-dom";

function Menu()  {
  const location = useLocation();
  return (
    <div>
      <div>Menu</div>
      <div>{location.state.id}</div>
    </div>
  );
}

export default Menu