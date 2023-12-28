import React, { useState } from 'react'
import "../Stylesheets/loginsub.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Loginnsub = () => {
  const navigate=useNavigate()
    const [ldata,ldataset]=useState({         
        email:"",        
        password:"",       
        
      })
      const appdata1=(e)=>{
    
        ldataset({ ...ldata, [e.target.name]: e.target.value });
        console.log(ldata)
      };
      const datasubmit=(e)=>{
        e.preventDefault()
        axios
          .post('http://localhost:3410/login',ldata)
          .then((res) => {
            
            
            
            if (res.data.msg === "your login successfully") {
                localStorage.setItem("token", res.data.token);
                console.log(res.data.token)
                console.log(res.data.userdetail.username)
                console.log(res.data.userdetail.email)
                localStorage.setItem("selfname",res.data.userdetail.username)
                localStorage.setItem("selfdetails",res.data.userdetail.email)
              
                alert(res.data.msg)
                navigate('/')
                
              
          }
          else{
            alert(res.data.msg);
          }
          })
          .catch((error) => {
            console.log(error);
           
          });
    
          ldataset({        
            email: "",
            password: "",
          });
    
      };
    
  
    return (<>
    <div className='login-sub-con-compo-1'>
            <div className='login-sub-con-compo-style1'>
                <h3>Sign in to your account</h3>
                <form>
                    
                    
                    <label htmlFor='email'>Email</label><br/>
                    <input  type='email' id='email' name='email' className='input1' value={ldata.email} onChange={appdata1} required/>
                    
                    <br/>
                    <br/>
                    <label htmlFor='password'>Password</label><br/>
                    <input  type='password' id='password' name="password"  className='input1' value={ldata.password} onChange={appdata1} required/>
                    <br/>
                    
                    
                    <br/>
                    <a href='#'>Forgot your password?</a><br/>
                    <div><button className='login-sub-button1-style' onClick={datasubmit}>SIGN IN</button></div>
                    <div><button className='login-sub-button2-style'>Login Via OTP</button></div>
                </form>
            
    
            </div>
          
        </div>
    
    </>
      
    )
  }; 
export default Loginnsub
