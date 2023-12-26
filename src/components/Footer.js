import React from 'react'
import { FaCopyright, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import {LuPhoneCall } from "react-icons/lu";
import { BiSolidMessageDetail } from "react-icons/bi";
import "../Stylesheets/footer.css";

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
        <a href='#'>find Command in linux with Examples</a><br/>
    <a href='#'>awk Command in unix/Linux Examples</a><br/>
    <a href='#'>grep Command in unix/Linux </a><br/>
    <a href='#'>ps Command in unix/Linux Examples</a><br/>
    <a href='#'>curl Command in Linux with Examples</a><br/>
    
    </div>
    
    <div className='margin-align-3'>POPULAR ARTICLES</div>
    
    <div className='margin-align-2'>
        <a href='#'>ifconfig Command in linux with Examples</a><br/>
    <a href='#'>Touch Command in Linux with Examples</a><br/>
    <a href='#'>ssh Command in Linux with Examples </a><br/>
    <a href='#'>screen Command in Linux with Examples</a><br/>
    <a href='#'>netstat Command in Linux </a><br/>
    
    </div>
    </div>
    <div className='footer-sub-container-1'>
    <div className='margin-align-1'>QUICK LINKS</div>
    
    <div className='margin-align-2'>
    <a href='#'>Interview Notes</a><br/>
    <a href='#'>Mock Tests</a><br/>
    <a href='#'>Placement</a><br/>
    <a href='#'>Programs</a><br/>
    <a href='#'>Coding Courses</a><br/>
    <a href='#'>About Us</a><br/>
    <a href='#'>Blog</a><br/>
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
