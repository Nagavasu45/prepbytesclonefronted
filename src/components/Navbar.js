import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import "../Stylesheets/navbar.css";


import { NavLink,useNavigate} from 'react-router-dom';
import axios from 'axios';


const Navbar = () => {
    const [loginout, setloginout] = useState(false);
     console.log(loginout) 
    const [barhide,Setbarhide]=useState(false)
    const navigate=useNavigate();
    const sty={
      display:barhide ? 'block':'none'
      
    }
    const barsmenuhandle=(()=>{
      Setbarhide(!barhide)
  
  })
  const handleaction=()=>{
    Setbarhide(!barhide)
  }
    
    
    const token = localStorage.getItem("token");
    //console.log(token)
    useEffect(()=>{
      if(token==null){
        setloginout(false)
      }

    },[token,navigate])
  
    useEffect(() => {
      console.log(token)
      if (token) {
         
        console.log(token);
          axios.get("https://prepbytesclonebackend.onrender.com/auth", { headers: { "authorization": `Bearer ${token}` } }) 
              .then((res) => {
                //   if (res.data.msg ==="User Authorized") {
                //         setloginout(true);
                //         //setprofilename(localStorage.getItem("selfname"))
                //         //navigate("/")                  

                // }     
                if(res.data.msg!=="User Authorized")  {
                  setloginout(false);

                }  
                else{
                  setloginout(true);
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
  const dashboardhandle=()=>{
    setloginout(false)
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
        (<><div className='barsmenu' ><FontAwesomeIcon icon={faBars} onClick={barsmenuhandle} /> </div>
         <div className='barsmenu-lists1' style={sty}>
         <div onClick={handleaction}><NavLink className="barsmenu-lists1-style" >Hi,{localStorage.getItem("selfname")}</NavLink></div>
          <div onClick={handleaction} className="barsmenu-lists1-style"><NavLink  className="barsmenu-lists1-style2" to="/Selfinfo">Dashboard</NavLink></div> 
          <div onClick={handleaction} className="barsmenu-lists1-style"><NavLink  className="barsmenu-lists1-style2" to='/Mocktests'>Mock Tests</NavLink></div>
          <div onClick={handleaction} className="barsmenu-lists1-style"><NavLink  className="barsmenu-lists1-style2" to="/Videotuto">Video Tutorials</NavLink></div>
          <div onClick={handleaction} className="barsmenu-lists1-style"><NavLink  className="barsmenu-lists1-style2" to="/Master">Master Competitive Programming</NavLink></div>
          <div onClick={handleaction} className="barsmenu-lists1-style"><NavLink  className="barsmenu-lists1-style2" to="/Fullstack">Full Stack Program</NavLink></div>
          <div onClick={handleaction} className="barsmenu-lists1-style"><NavLink  className="barsmenu-lists1-style2" to="/Elevationacedemy" >Elevation Academy</NavLink></div>
          <div onClick={handleaction} className="barsmenu-lists1-style"><NavLink  className="barsmenu-lists1-style2" onClick={logoutbtn}>Logout</NavLink></div>
        </div>
        <div className='nav-bar-lists1'>
        
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
  <button className="dropbtn"><NavLink to="/Elevationacedemy" className="navbar-elevation">Elevation Academy</NavLink></button>
        
  </div>
  
  

  <div className="dropdown">
        <button className="dropbtn">Project <FontAwesomeIcon icon={faCaretDown} /></button>
        <div className="dropdown-content">
          <NavLink to="/Htmlprojects">HTML</NavLink>
          <NavLink to="/Cssprojects">CSS</NavLink>
          <div onClick={handleaction}><NavLink className="barsmenu-lists1-style" to="/Fullstack">Full Stack Program</NavLink></div>
          <NavLink to="/Javascriptprojects">JavaScript</NavLink>
          <NavLink to="/Reactjsprojects">React js</NavLink>
          <NavLink to="/Nodejsprojects">Node js</NavLink>
          <NavLink to="/Mongodbprojects">MongoDB</NavLink>
            

        </div>
  </div>
  { loginout ? (<><div className="dropdown2">
  <div>
  <div className="dropbtn2">
    <span className="text-round-style">{localStorage.getItem("selfname")[0].toUpperCase()}</span>
    <span className="text-normal-style">Hi</span><span className="text-normal-style">{localStorage.getItem("selfname")} </span>
  </div>
  </div>
  <div className="dropdown-content2">
  
      
    <NavLink to="/Selfinfo" onClick={dashboardhandle} > Dashboard</NavLink>
    
     
      <NavLink  onClick={logoutbtn}>Logout</NavLink >
      
  </div>
  
  </div> </>):(<> </>)}
  
  
  
  
 
         </div></> ): 
         (<><div className='barsmenu'><FontAwesomeIcon icon={faBars} onClick={barsmenuhandle}/> </div>
         <div className='barsmenu-lists1' style={sty}>
          <div className="barsmenu-lists1-style" onClick={handleaction}><NavLink className="barsmenu-lists1-style2"  to="/Master">Master compitative programming</NavLink></div> 
          <div className="barsmenu-lists1-style" onClick={handleaction}><NavLink className="barsmenu-lists1-style2" to='/Mocktests'>Mock Tests</NavLink></div>
          <div className="barsmenu-lists1-style" onClick={handleaction}><NavLink className="barsmenu-lists1-style2" to="/Videotuto">Video Tutorials</NavLink></div>
          <div className="barsmenu-lists1-style" onClick={handleaction}><NavLink className="barsmenu-lists1-style2" to="/Master">Master Competitive Programming</NavLink></div>
          <div className="barsmenu-lists1-style" onClick={handleaction}><NavLink className="barsmenu-lists1-style2" to="/Fullstack">Full Stack Program</NavLink></div>
          <div className="barsmenu-lists1-style" onClick={handleaction}><NavLink className="barsmenu-lists1-style2"  to="/Elevationacedemy" >Elevation Academy</NavLink></div>
          <div className="barsmenu-lists1-style" onClick={handleaction}><NavLink className="barsmenu-lists1-style2" to="/Login" >Login/Signup</NavLink></div>
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
  <button className="dropbtn"><NavLink to="/Elevationacedemy" className="navbar-elevation">Elevation Academy</NavLink></button>
        
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
  </div></div></>)}
        
        
        
      
    </div>
    
    </>)
}

export default Navbar
