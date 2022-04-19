import React from 'react'
import './Restaurant.css'

function Restaurant({id, restaurant_name, image, rating}) {
  return (
    <div className='restaurant'>
        <h1>{restaurant_name}</h1>
        <img className='restaurant_image'  src={image} alt= ''/>
        <h4>Rating {rating} ⭐</h4>
    </div>
  )
}

export default Restaurant