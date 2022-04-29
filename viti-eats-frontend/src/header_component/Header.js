import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../assets/logo_transparent.png'
import './Header.css'
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className = 'h-2 d-flex align-items-center bg-danger position-sticky top-0'>  
        <Link to='/' style={{ textDecoration: 'none' }}>
          <div>
              <img className='pr-1' style={{ height: '100px' }} src ={logo}
                      alt=""></img>
          </div>
        </Link>
          <div className = "d-flex align-items-center rounded">
              <input className = "h-1 p-1 border-0 w-100" type = "text"></input>  
              <SearchIcon className = "p-1  bg-white"/>
          </div>
          <div className = "d-flex justify-content-evenly  ">
                
                <div className = 'header_option'>
                    <span className = 'header_optionLineOne'>
                      <p>login</p> 
                      <p><ArrowDropDownIcon/></p>
                    
                    </span> 
                    
                </div>
                <Link to='/transactions' style={{ textDecoration: 'none' }}>
                    <div className = 'header_option'>
                          <span className = 'header_optionLineOne'>
                            <p>Transactions</p>  
                          </span> 
                        
                    </div>
                </Link>
                <Link to='/about' style={{ textDecoration: 'none' }}>
                    <div className = 'header_option'>
                          <span className = 'header_optionLineOne'>
                            <p>About</p>  
                          </span> 
                        
                    </div>
                </Link>
                
                <Link to='/checkout' style={{ textDecoration: 'none' }}>
                  <div className = 'header_option'>
                      <span className = 'header_optionLineOne'>
                        <p><ShoppingCartIcon/></p> 
                        <p>0</p>          
                      </span>        
                  </div>
                </Link>
                
               
              
          </div>
        </div>
  )
}

export default Header