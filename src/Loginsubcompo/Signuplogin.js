import React, { useState } from 'react'
import Loginnsub from './Loginnsub'
import Signupsub from './Signupsub'
import "../Stylesheets/loginsub.css"
// import { NavLink } from 'react-router-dom'

const Signuplogin = () => {
    
    const [btn1,setBtn1]=useState(false)
    const [btn2,setBtn2]=useState(true)
    const handlebtn1=()=>{
        setBtn1(true)
        setBtn2(false)
        
    }
   

    const handlebtn2=()=>{
        setBtn2(true)
        setBtn1(false)
    }
  return (
    <div>
        <div className='login-signup-width'>
            <button className='btn1'  onClick={handlebtn1}>Login</button><button className='btn2' onClick={handlebtn2}>Sign Up</button>
           <div> {btn1 ? <Loginnsub /> :" "}
            {btn2 ? <Signupsub /> : " "}
            </div>
            {/* <button className='btn1'  onClick={handlebtn1}><NavLink to="/Loginsub" style={({isActive})=>({borderBottom:isActive ? "1px solid black " : "none"})}> Login</NavLink></button><button className='btn2' onClick={handlebtn2}><NavLink to="/Signupsub" style={({isActive})=>({borderBottom:isActive ? "1px solid black " : "none"})}> Sign Up</NavLink></button>
            */}<hr/>
        </div>
      
    </div>
  )
}

export default Signuplogin
