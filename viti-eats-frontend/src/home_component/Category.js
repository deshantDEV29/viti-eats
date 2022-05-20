import React from 'react'
import RestaurantCategories from './RestaurantCategories'

function Category({ Id, Category_Name }) {
    return (
        <div className=''>

            <div className='float-left' style={{ fontWeight: "bold", fontSize: "24px", fontFamily: "courier" }}>{Category_Name}</div>
            <div style={{ height: "40px" }}>

            </div>
            <RestaurantCategories name={'Filet Burger Only'} long_description = {'Filet Burger Only'} item_price = {'10.45'} item_rating = {'4.1'}/>

        </div>
    )
}

export default Category