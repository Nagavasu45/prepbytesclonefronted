import React from 'react'
import { FaCopyright, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import {LuPhoneCall } from "react-icons/lu";
import { BiSolidMessageDetail } from "react-icons/bi";
import "../Stylesheets/footer.css";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className='footer-main-container'>
    <div className='footer-sub-container-1'>
        <div className='margin-align-1'>FOLLOW US</div>
        <br/>
        <div className='margin-align-2'>
    <FaFacebookSquare   style={{color:'rgb(57, 90, 234)', height:'28px',width:'28px'}}/>
    <FaInstagramSquare  style={{color:'rgb(223, 78, 52)', height:'28px',width:'28px'}}/>
    <FaLinkedin  style={{color:'rgb(80, 106, 223)', height:'28px',width:'28px'}}/>
    <FaYoutubeSquare  style={{color:'red', height:'28px',width:'28px'}}/>
    
    </div>
    <br/>
    <br/>
    <div className='margin-align-1'>CONTACT US</div>
    <div className='margin-align-2'>
    <LuPhoneCall className='margin-align-2' style={{color:'black', height:'28px',width:'28px'}}/>+91-9133610098
    <br/><BiSolidMessageDetail className='margin-align-1' style={{color:'black', height:'28px',width:'28px'}} />support@prepbytes.com
    </div>
    </div>

    <div className='footer-sub-container-1'>
        <div className='margin-align-1'>LATEST ARTICLES</div>
        
        <div className='margin-align-2'>
        <NavLink>find Command in linux with Examples</NavLink><br/>
        <NavLink>awk Command in unix/Linux Examples</NavLink><br/>
        <NavLink>grep Command in unix/Linux </NavLink><br/>
    <NavLink>ps Command in unix/Linux Examples</NavLink><br/>
    <NavLink>curl Command in Linux with Examples</NavLink><br/>
    
    </div>
    
    <div className='margin-align-3'>POPULAR ARTICLES</div>
    
    <div className='margin-align-2'>
        <NavLink>ifconfig Command in linux with Examples</NavLink><br/>
    <NavLink>Touch Command in Linux with Examples</NavLink><br/>
    <NavLink>ssh Command in Linux with Examples </NavLink><br/>
    <NavLink>screen Command in Linux with Examples</NavLink><br/>
    <NavLink>netstat Command in Linux </NavLink><br/>
    
    </div>
    </div>
    <div className='footer-sub-container-1'>
    <div className='margin-align-1'>QUICK LINKS</div>
    
    <div className='margin-align-2'>
    <NavLink>Interview Notes</NavLink><br/>
    <NavLink>Mock Tests</NavLink><br/>
    <NavLink>Placement</NavLink><br/>
    <NavLink>Programs</NavLink><br/>
    <NavLink>Coding Courses</NavLink><br/>
    <NavLink>About Us</NavLink><br/>
    <NavLink>Blog</NavLink><br/>
    </div>
    
    
    
    </div>
     
    </div>
    <div className='footer-hr'>
    <hr className='footer-hr-line'/></div>
    <div className='footer-last'>
      <span className='copyright-style'>copyright <FaCopyright/>2023</span>
      <span className='last-line'>Privacy Policy </span> <span className='last-line'>Refund Policy</span><span className='last-line'>Terms Of Use</span>
    </div>
    
    <div className='request-call-line'> Need Help? Talk to us on 079 6900 2111 or <a href="#" className='request-call-line-sub'>Request Callback</a></div>
    </> )
}

export default Footer
