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
   
    
    // console.log(temp,loginout,"11111111")
  //  const [profilename,setprofilename]=useState("hi")
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
                        //setprofilename(localStorage.getItem("selfname"))
                        //navigate("/")
                    

                }                
              })
              .catch(err => console.log(err))
      }
      
  }, [token,navigate])

  // const selfdashboard=()=>{
  //   navigate("/Selfinfo")
  // }
  const logoutbtn=()=>{
    localStorage.clear()
    setloginout(false)
    
    
    navigate('/Login')
  }
  
  
 
 
  // onClick={thirdhidebutton}
  return(<>
    <div className='home-main-container-1'>
     
        <div className='header-container'>
        <div className='header-container-sub-1'>
             
            <div className='header-logo'>
                <NavLink to='/'><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg' alt="not loaded " className='logo-size'/></NavLink>

            </div>
            
            </div>
           {loginout ? <></>: <div className='header-login-signup-buttons'> <button id='login' ><NavLink to='/Login' className='text-style-navlink'>Login</NavLink></button>
                                                          <button id='signup'><NavLink to='/Signup' className='text-style-navlink'>Sign up</NavLink></button></div>}
        </div>
        {loginout ?
        (<div className='nav-bar-lists1'>
        
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
  { loginout ? (<><div className="dropdown2">
  <div>
  <div className="dropbtn2">
    <span className="text-round-style">{temp[0].toUpperCase()}</span>
    <span className="text-normal-style"><span>Hi</span><span>{localStorage.getItem('selfname')} </span></span>
  </div>
  </div>
  <div className="dropdown-content2">
  {/* <button onClick={selfdashboard} className='navbar-logout-btn1'>
    <NavLink to="/Selfinfo" > Dashboard</NavLink>
    </button><br/>
     <button onClick={logoutbtn} className='navbar-logout-btn1'>
      <NavLink to="/">Logout</NavLink >
      </button> */}
      
    <NavLink to="/Selfinfo"  > Dashboard</NavLink>
    
     
      <NavLink  onClick={logoutbtn}>Logout</NavLink >
      
  </div>
  
  </div> </>):(<> </>)}
  
  
  
  {/* <div className="dropdown">
  <div>
  <div className="dropbtn">
    <span className="text-round-style">{temp[0].toUpperCase()}</span>
    <span className="text-normal-style"><span>Hi</span><span>{profilename} </span></span>
  </div>
  </div>
  <div className="dropdown-content">
  <button onClick={selfdashboard} className='navbar-logout-btn1'><NavLink to="/Selfinfo"> Dashboard</NavLink></button><br/>
     <button onClick={logoutbtn} className='navbar-logout-btn1'><NavLink to="/">Logout</NavLink ></button>
  </div>
  
  </div> */}
 
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
  </div></div>)}
        
        
        
      
    </div>
    
    </>)
}

export default Navbar
