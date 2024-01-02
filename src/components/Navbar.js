import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import "../Stylesheets/navbar.css";

import { NavLink,useNavigate} from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const [loginout, setloginout] = useState(false);
    const navigate=useNavigate();
    const temp=localStorage.getItem("selfname")
    console.log(temp)
   const [profilename,setprofilename]=useState("hi")
    const token = localStorage.getItem("token");
    //console.log(token)
    useEffect(() => {
      if (token) {
        console.log(token);
          axios.get("https://prepbytesclonebackend.onrender.com/auth", { headers: { "authorization": `Bearer ${token}` } }) 
              .then((res) => {
                  console.log(res.data.msg);
                  if (res.data.msg ==="User Authorized") {
                        setloginout(true);
                        setprofilename(localStorage.getItem("selfname").substring(0, 5))
                        navigate("/")
                    

                }                
              })
              .catch(err => console.log(err))
      }
      
  }, [token,navigate])
  const selfdashboard=()=>{
    navigate("/Selfinfo")
  }
  const logoutbtn=()=>{
    localStorage.clear()
    setloginout(false)
    navigate('/')
  }

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
                <NavLink to='/Mocktests'>Mock Tests</NavLink>
                
                <NavLink to="/Videotuto">Video Tutorials</NavLink>
            </div>
      </div>
      <div className="dropdown">
            <button className="dropbtn">Courses and Programs <FontAwesomeIcon icon={faCaretDown} /></button>
            <div className="dropdown-content">
                <NavLink to="/Master">Master Competitive Programming</NavLink>
                <NavLink to="/Fullstack">Full Stack Program</NavLink>
                {/* <a href="#">Master Competitive Programming</a>
                <a href="#">Full Stack Program</a> */}
            </div>
      </div>
      
      <div className="dropdown">
      <button className="dropbtn"><NavLink to="/Elevationacedemy"></NavLink>Elevation Academy</button>
            
      </div>
      
      

      <div className="dropdown">
            <button className="dropbtn">Project <FontAwesomeIcon icon={faCaretDown} /></button>
            <div className="dropdown-content">
              <NavLink to="/Htmlprojects">HTML</NavLink>
              <NavLink to="/Cssprojects">CSS</NavLink>
              <NavLink to="/Javascriptprojects">JavaScript</NavLink>
              <NavLink to="/Reactjsprojects">React js</NavLink>
              <NavLink to="/Nodejsprojects">Node js</NavLink>
              <NavLink to="/Mongodbprojects">MongoDB</NavLink>
                {/* <a href="#">HTML </a>
                <a href="#">CSS</a>
                <a href="#">JavaScript</a>
                <a href="#">React JS</a>
                <a href="#">Node JS</a>
                <a href="#">MongoDB</a>  */}
                {/* <button  className='navbar-logout-btn1'><NavLink to="/Selfinfo"> Dashboard</NavLink></button><br/>
                <button  className='navbar-logout-btn1'><NavLink to="/">Logout</NavLink ></button>     */}


            </div>
      </div>
      
      {loginout ? (
    <div className="dropdown">
      <button className="dropbtn">
        <span className="text-round-style">hi</span>
        <span className="text-normal-style">{profilename} </span>
      </button>
      <div className="dropdown-content">
        <button onClick={selfdashboard} className='navbar-logout-btn1'><NavLink to="/Selfinfo"> Dashboard</NavLink></button><br/>
        <button onClick={logoutbtn} className='navbar-logout-btn1'><NavLink to="/">Logout</NavLink ></button>
      </div>
      </div>
    
  ) : " "}
           
      
       

             </div>
        
        
      
    </div>
    
    </>)
}

export default Navbar
