import React from 'react'
import RestaurantInfo from './RestaurantInfo'
import Category from './Category'

function Item() {
    return (
        <div className='container mt-0 '>
            <RestaurantInfo Restaurant_Name={'McDonald\'s Nadi'} Restaurant_Address ={'Corner of Enamanu Road &, Queens Rd, Nadi, Fiji'}  Restaurant_Email = {'marketing@mcdonalds.com.fj'}  Restaurant_Rating = {'3.8'} Restaurant_Review = {'60'} />
            <Category  Category_Name={'Promotion'}/>
            

        </div>
    )
}

export default Item