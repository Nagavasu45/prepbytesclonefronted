import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import "../Stylesheets/navbar.css";
import { FaBars } from "react-icons/fa";

import { NavLink,useNavigate} from 'react-router-dom';
import axios from 'axios';


const Navbar = () => {
    const [loginout, setloginout] = useState(false);
    const [secnav, Setsecnav] = useState(false)
    const [sechidemenu, Setsechidemenu] = useState(false)
    const [sechideicon1, Sethideicon1] = useState(true)
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
                        setprofilename(localStorage.getItem("selfname"))
                        //navigate("/")
                    

                }                
              })
              .catch(err => console.log(err))
      }
      
  }, [token,navigate])
  const selfdashboard=()=>{
    Setsecnav(true)
    Setsechidemenu(true)

    navigate("/Selfinfo")
  }
  const logoutbtn=()=>{
    localStorage.clear()
    setloginout(false)
    Setsecnav(false) 
    Setsechidemenu(false)
    navigate('/')
  }
  const iconhandle=()=>{
    Sethideicon1(!sechideicon1)

  }
  const widthhandle={
     width: sechideicon1 ? '50px' : '200px',
     
  transition: sechideicon1 ? ' width 2s': " width 2s"

  }
  // onClick={thirdhidebutton}
  return(<>
    <div className='home-main-container-1'>
     
        <div className='header-container'>
        <div className='header-container-sub-1'>
              {sechidemenu ? (<div className='header-container-sub-1-item1' >{sechideicon1 ? (<><div style={widthhandle}><FaBars  onClick={iconhandle}/></div><div className='dashboard-menuhide'>courses</div></>): (<div style={widthhandle}><button onClick={iconhandle}>X</button></div>)}   </div>):(<></>)}
            <div className='header-logo'>
                <NavLink to='/'><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg' alt="not loaded " className='logo-size'/></NavLink>

            </div>
            
            </div>
           {loginout ? <></>: <div className='header-login-signup-buttons'> <button id='login' ><NavLink to='/Login' className='text-style-navlink'>Login</NavLink></button>
                                                          <button id='signup'><NavLink to='/Signup' className='text-style-navlink'>Sign up</NavLink></button></div>}
        </div>
        {loginout ?(<div className='nav-bar-lists1'>
        {secnav ?(<></>):(<>
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
            

        </div>
  </div></>)}
  <div className="dropdown">
  <div>
  <div className="dropbtn">
    <span className="text-round-style">{temp[0].toUpperCase()}</span>
    <span className="text-normal-style">Hi{profilename} </span>
  </div>
  </div>
  <div className="dropdown-content">
    <button onClick={selfdashboard} className='navbar-logout-btn1'><NavLink to="/Selfinfo"> Dashboard</NavLink></button><br/>
    <button onClick={logoutbtn} className='navbar-logout-btn1'><NavLink to="/">Logout</NavLink ></button>
  </div>
  
  </div>
 
         </div> ): 
         (<div className='nav-bar-lists'>
        
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
            

        </div>
  </div>
  
  {/* {loginout ? (
<div className="dropdown">
  <div>
  <div className="dropbtn">
    <span className="text-round-style">hi</span>
    <span className="text-normal-style">{profilename} </span>
  </div>
  </div>
  <div className="dropdown-content">
    <button onClick={selfdashboard} className='navbar-logout-btn1'><NavLink to="/Selfinfo"> Dashboard</NavLink></button><br/>
    <button onClick={logoutbtn} className='navbar-logout-btn1'><NavLink to="/">Logout</NavLink ></button>
  </div>
  
  </div>

) : " "} */}
       
  
   

         </div>)}
        
        
        
      
    </div>
    
    </>)
}

export default Navbar
