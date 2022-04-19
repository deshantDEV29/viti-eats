import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className = 'footer'>
            <div className='footer__row'>
                        <div className='footer__column'>
                                    
                                    
                                    <h2>Location</h2>
                                    <p>Some Where In Fiji</p>
                                </div>
                    
                        <div className='footer__column'>
                            
                            <h2>Around the Web</h2>
                            <a >
                                <LinkedInIcon className = "footer__icon" /> 
                            </a>
                            <a>
                                < FacebookIcon className = "footer__icon" />
                            </a>
                            <a >
                                <InstagramIcon className = "footer__icon" /> 
                            </a>
                            
                            
                            
                             
                        
                        </div>
                        <div className='footer__column'>
                           
                            <h2>About</h2>
                            <p>Fiji Eats is a business that aims to provide the best service to its customers by 
                              providing them with a variety of options to choose from</p>
                        
                        </div>
                        
                    </div>  
                    <div className='footer__row2'>
                        <div className='footer__nav'>
                            <Link to='/home' style={{ textDecoration: 'none' }}>
                                <div className = 'footer_option'>
                                    <span className = 'footer_optionLineOne'>Home</span>                   
                                </div>
                            </Link>
                            
                            <Link to='/transactions' style={{ textDecoration: 'none' }}>
                                    <div className = 'footer_option'>
                                        <span className = 'footer_optionLineOne'>Transaction</span>                   
                                    </div>
                            </Link>
                            <Link to='/about' style={{ textDecoration: 'none' }}>
                                    <div className = 'footer_option'>
                                        <span className = 'footer_optionLineOne'>About</span>                   
                                    </div> 
                            </Link>  
                        </div>
                
            </div>  
          
          
        </div>
  )
}

export default Footer