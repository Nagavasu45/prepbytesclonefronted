import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import "../Stylesheets/navbar.css";

import { NavLink,useNavigate} from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const [loginout, setloginout] = useState(false);
    const navigate=useNavigate();

    // const token = localStorage.getItem("token");
    // console.log(token)
    
    // useEffect(() => {
    //     console.log(".....login-------------------------------")
    //     if (token) {
    //         console.log(".....login-------------------------------")
    //         axios.get("http://localhost:3410/auth", { headers: { "authorization": `Bearer ${token}` } }) 
    //             .then((res) => {
    //                 console.log(res.data.msg);
    //                 if (res.data.msg ==="User Autherized") {

    //                     console.log("__________")

    //                     setloginout(true);
    //                     console.log(loginout)
                        

    //                 }
    //             })
    //             .catch(err => console.log(err))
    //     }
    // }, [token,navigate])
    const token = localStorage.getItem("token");
    //console.log(token)
    useEffect(() => {
      if (token) {
        console.log(token);
          axios.get("http://localhost:3410/auth", { headers: { "authorization": `Bearer ${token}` } }) 
              .then((res) => {
                  console.log(res.data.msg);
                  if (res.data.msg ==="User Authorized") {
                    setloginout(true);
                    

                }
                else{
                    console.log(res.data.msg)

                }
              })
              .catch(err => console.log(err))
      }
      
  }, [token, navigate])
  return(<>
    <div className='home-main-container-1'>
        <div className='header-container'>
        <div >
            <div className='header-logo'>
                <NavLink to='/'><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg' alt="not loaded " className='logo-size'/></NavLink>

            </div>
            </div>
           {loginout ? <></>: <div className='header-login-signup-buttons'> <button id='login'><NavLink to='/Login'>Login</NavLink></button>
                                                          <button id='signup'><NavLink to='/Signup'>Sign up</NavLink></button></div>}
        </div>
        <div className='nav-bar-lists'>
        
            <div className="dropdown">
            <button className="dropbtn">Study Material <FontAwesomeIcon icon={faCaretDown} /></button>
            <div className="dropdown-content">
                <NavLink to="/Interviewnotes">Interview Notes</NavLink>
                <a href="#">Mock Tests</a>
                <a href="#">Video Tutorial</a>
            </div>
      </div>
      <div className="dropdown">
            <button className="dropbtn">Courses and Programs <FontAwesomeIcon icon={faCaretDown} /></button>
            <div className="dropdown-content">
                <a href="#">Placement Programs</a>
                <a href="#">Master Competitive Programming</a>
                <a href="#">Full Stack Program</a>
            </div>
      </div>
      
      <div className="dropdown">
      <a href="#"><button className="dropbtn">Elevation Academy</button></a>
            
      </div>
      
      

      <div className="dropdown">
            <button className="dropbtn">Blog <FontAwesomeIcon icon={faCaretDown} /></button>
            <div className="dropdown-content">
                <a href="#">HTML </a>
                <a href="#">CSS</a>
                <a href="#">JavaScript</a>
                <a href="#">React JS</a>
                <a href="#">Node JS</a>
                <a href="#">MongoDB</a>     


            </div>
      </div>
      <div className="dropdown">
      {loginout ? (
    <div>
      <button className="dropbtn">
        <span className="text-round-style">G</span>
        <span className="text-normal-style">hi garikipati</span>
      </button>
      <div className="dropdown-content">
        <a href="#">Dashboard</a>
        <a href="#">logout/signout</a>
      </div>
      </div>
    
  ) : " "}
           
      </div>
       

             </div>
        
        
      
    </div>
    
    </>)
}

export default Navbar
