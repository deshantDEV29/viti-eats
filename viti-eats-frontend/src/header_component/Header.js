import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../assets/logo_transparent.png'
import './Header.css'
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className = 'header'>  
        <Link to='/home' style={{ textDecoration: 'none' }}>
          <div>
              <img className='header__image' src ={logo}
                      alt=""></img>
          </div>
        </Link>
          <div className = "header_search">
              <input className = "header_searchInput" type = "text"></input>  
              <SearchIcon className = "header_searchIcon"/>
          </div>
          <div className = "header_nav">
                
                <div className = 'header_option'>
                    <span className = 'header_optionLineOne'>
                      <p>Hello User</p> 
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