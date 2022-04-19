import React from 'react'
import logo from '../assets/logo_tab.png'
import './Signup.css'
import {Link} from "react-router-dom";

function Signup() {
  return (
    <div className='signup__div'>
      <div className='signup__left'>
        <img className='image' src ={logo}
                  alt=""></img>
          <h2>Welcome to Viti Eats</h2>
          <h4>Deliver Food Instantly</h4>
          <div>
            <p>2022.Viti Eats Inc.</p>

          </div>
      </div>
      <div className='signup__right'>
        <form>
            <div>
              <p className='signup__desc'>Signup to explore our services and the tools we offer</p>
            </div>
            <div >
              <input type="text" placeholder='Name'  className="usersignup"/>
            </div>
            <div >
              <input type="text" placeholder='Email'  className="usersignup"/>
            </div>
            <div >
              <input type="text" placeholder='Phone'  className="usersignup"/>
            </div>
            <div className="input__container">           
              <input type="password"  placeholder='Password'  className="usersignup" />              
            </div>
            <Link to='/home' style={{ textDecoration: 'none' }}>
              <div>
                <button  className='signup__btn'>Signup</button>
              </div> 
            </Link>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <div className='login__link' >
                <p  >Click to Login</p>
              </div>
            </Link> 
          </form> 
      </div>
    </div>
  )
}

export default Signup