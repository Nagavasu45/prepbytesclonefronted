import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Footer from './Footer'
import Loginnsub from '../Loginsubcompo/Loginnsub'
import Signupsub from '../Loginsubcompo/Signupsub'
import Loginsignup from '../Loginsubcompo/Loginsignup'
import Signuplogin from '../Loginsubcompo/Signuplogin'
import Signup from './Signup'
import Interviewnotes from '../study material/Interviewnotes'
import Selfinfo from './Selfinfo'
import Mocktests from '../study material/Mocktests'
import Success from './Success'
import Cancel from './Cancel'






const RouteCompo = () => {
  return (<>
  <BrowserRouter>
  
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Login" element={<Login />}/>
    <Route path='/Signup' element={<Signup />}/>
    <Route path="/Navbar" element={<Navbar />}/>
    <Route path='/Loginnsub' element={<Loginnsub />}/>
    <Route path='/Signupsub' element={<Signupsub />}/>
    <Route path='/Loginsignup' element={<Loginsignup />}/>
    <Route path='/Signuplogin' element={<Signuplogin />}/>
    <Route path='/Interviewnotes' element={<Interviewnotes /> }/>    
    <Route path='/Selfinfo' element={<Selfinfo />}/>
    <Route path='/Mocktests' element={<Mocktests />}/>
    <Route path='/Success' element={<Success />}/>
    <Route path='/Cancel' element={<Cancel />}/>
    <Route path="/Footer" element={<Footer />}/>
  </Routes>
  <Footer />
  </BrowserRouter>
  
 
    
    </>
  )
}

export default RouteCompo
