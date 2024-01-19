import React, { useState } from 'react'
import Loginnsub from './Loginnsub'
import Signupsub from './Signupsub'
import "../Stylesheets/loginsub.css"


const Loginsignup = () => {
    const [btn1,setBtn1]=useState(true)
    const [btn2,setBtn2]=useState(false)
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
            <button className='btn1' onClick={handlebtn1}>Login</button><button className='btn2' onClick={handlebtn2}>Sign Up</button>
           <div className='btn1-width'> {btn1 ?<div className='btn1-width-style'> <Loginnsub /></div> :" "}
            {btn2 ? <Signupsub /> : " "}
            </div>
        </div>
      
    </div>
  )
}

export default Loginsignup
