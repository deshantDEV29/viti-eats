import React from 'react'


function Restaurant({id, restaurant_name, image, rating}) {
  return (
    <div className='p-1 text-body'>
        <h4>{restaurant_name}</h4>
        <img className='h-25 w-25'  src={image} alt= ''/>
        <h5>Rating {rating} ⭐</h5>
    </div>
  )
}

export default Restaurant