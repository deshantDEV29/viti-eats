import React from 'react'
import mcdonalpic from '../assets/mcdonalds.png'


function RestaurantInfo({Id, Restaurant_Name, Restaurant_Address,Restaurant_Rating, Restaurant_Review, Restaurant_Email}) {
  return (
    <div>
        
        <div className='text-left'>
                <img className='rounded img-fluid' src={mcdonalpic} alt='' />
                <div style={{ height: "5px" }}></div>
                <div>
                    <span className='text-left bolder' style={{ fontFamily: 'Gilroy', fontSize: "32px", fontWeight: "bold" }}>{Restaurant_Name}</span>
                    <button type="button" class="btn btn-success float-right">{Restaurant_Rating}</button>
                </div>
                <span className='float-left'>{Restaurant_Address}</span> <span className='float-right'>{Restaurant_Review} Reviews</span><br></br>
                <p>Email: {Restaurant_Email}</p>
            </div>
           
    </div>
  )
}

export default RestaurantInfo