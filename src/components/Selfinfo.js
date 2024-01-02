import React from 'react'
import "../Stylesheets/selfinfo.css"
import { NavLink } from 'react-router-dom'



const Selfinfo = () => {
  return (<>
    <div className='dashboard-navbar-container'>

      <div className='dashboard-navbar-sub-con1'>
        <div className='dashboard-navbar-sub-con2'>
          <div><button> X </button></div>
          <div className='header-logo'>
                <NavLink to='/'><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg' alt="not loaded " className='logo-size'/></NavLink>

            </div>
        </div>
        <div className='dashboard-navbar-sub-con3'><div>Coding contest</div><div>hi Garikipati</div> </div>
      </div>
      
      
    </div>
    </>)
}

export default Selfinfo
