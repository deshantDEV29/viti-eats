import React from 'react'
import Restaurant from './Restaurant'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='restaurant_section'>
          <div className='rescomp'>
            <Restaurant restaurant_name={'McDonalds'} image={'https://www.businesster.com/images/uploads/post/BS_mcdonalds-mcvalue-lunch-dinner-deals-start-from-rm795-only-available-from-1-april-2019.jpg'} rating={4.1}/>
          </div>
          <div className='rescomp'>
            <Restaurant restaurant_name={'Burger King'} image={'https://cphimageprocessor.azurewebsites.net/merchants/merchant-86985568-a0e0-48af-8de0-e248956e5e59.jpg'} rating={4.0}/>
          </div>
          <div className='rescomp'>
            <Restaurant restaurant_name={'Swagat'} image={'https://www.yourphnompenh.com/order/wp-content/uploads/2014/07/Swagat-in-yourphnompenh-online-ordering-food-n-delivery-service-1.jpg'} rating={4.1}/>
          </div>
          
        </div>
        <div className='restaurant_section'>
          <div className='rescomp'>
            <Restaurant restaurant_name={'J&R Fish n Chips'} image={'https://scontent.fsuv1-1.fna.fbcdn.net/v/t1.6435-9/99120702_1670852593054055_8620411018507452416_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nJYyxt0IrgoAX8p0W9A&_nc_ht=scontent.fsuv1-1.fna&oh=00_AT9KFlTuzSug04ZDhq5QxBHfhgpyMAlK0d5XkvwSnXcZpw&oe=62818237'} rating={3.9}/>
          </div>
          <div className='rescomp'>
            <Restaurant restaurant_name={'Snacky Snacks'} image={'https://scontent.fsuv1-1.fna.fbcdn.net/v/t1.6435-9/188514340_287065039813564_4871930361689190969_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=uulroFcWcd8AX8ipk46&tn=YgzyqsNLQzgPmQxZ&_nc_ht=scontent.fsuv1-1.fna&oh=00_AT8GO7sOMg0BGNSBLHlK3TA6PAtFR42phMXLyWxq9dDjmw&oe=627E6F0A'} rating={4.0}/>
          </div>
          <div className='rescomp'>
            <Restaurant restaurant_name={'Wish Bone'} image={'https://scontent.fsuv1-1.fna.fbcdn.net/v/t31.18172-8/20157611_1306258996138342_5157013534733748260_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=mpLPWjzBEWgAX9v8G-z&_nc_ht=scontent.fsuv1-1.fna&oh=00_AT_Pz2-WomWe-Scq8fBcSs84v919liOaWTkdeaWsJE55JQ&oe=627E3EBD'} rating={4.1}/>
          </div>
          
        </div>
    </div>
  )
}

export default Home