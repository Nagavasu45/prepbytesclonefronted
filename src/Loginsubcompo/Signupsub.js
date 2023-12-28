import React, { useState } from 'react';
import "../Stylesheets/signupsub.css"
import axios from 'axios';

const Signupsub = () => {
    const [rdata,rdataset]=useState({
        username:"",
        
        email:"",
        phonenumber:"",
        password:"",
        college:"",
        passingyear:""
        
      })
    const appdata=(e)=>{
    
        rdataset({ ...rdata, [e.target.name]: e.target.value });
        console.log(rdata)
      };
      const datasubmit=(e)=>{
        e.preventDefault()
        // https://nodehanson4.onrender.com/registerpage
        axios
          .post('http://localhost:3410/register',rdata)
          .then((res) => {
            
            // setStore(res.data.msg);
            // alert(res.data.msg);
            console.log(res.data)
            
            if (res.data.msg === "user successfully registered") {
              localStorage.setItem('token',res.data.token)
    
              console.log(res.data.token)
              
              alert(res.data.msg)
          }
          else{
            alert(res.data.msg)
          }
          })
          .catch((error) => {
            console.log(error);
            
          });
    
          rdataset({
            username: "",            
            email: "",
            phonenumber:"",
            password: "",
            college:"",
            passingyear:""
           
          });
    
      };
    
    return (<>
  
  <div className='login-sub-con-compo-1'>
            <div className='login-sub-con-compo-style1'>
                <h3>Create your new account</h3>
                <form>
                    <label htmlFor='username'>Name</label><br/>
                    <input  type='text' id='username' name='username' className='input1' value={rdata.username} onChange={appdata} required/>
                    <br/>
                    <br/>
                    
                    
                    <label htmlFor='email'>Email</label><br/>
                    <input  type='email' id='email' name='email' className='input1' value={rdata.email} onChange={appdata} required/>
                    
                    <br/>
                    <br/>
                    <label htmlFor='phonenumber'>Phonenumber</label><br/>
                    <input  type='Number' id='phonenumber' name='phonenumber'className='input1' value={rdata.phonenumber} onChange={appdata} required/>
                    <br/>
                    <br/>
                    <label htmlFor='password'>Password</label><br/>
                    <input  type='password' id='password' name="password" className='input1' value={rdata.password} onChange={appdata} required/>
                    <br/>  <br/>
                    <div className='coll-passing'>
                        <div>
                    <label htmlFor='college'>College</label><br/>
                    <input  type='text' id='college' name="college" className='input2' value={rdata.college} onChange={appdata} required/>
                    </div>
                    <div>
                    
                    <label htmlFor='passingyear'>Passingyear</label><br/>
                    <input  type='Number' id='passingyear' name="passingyear" className='input2' value={rdata.passingyear} onChange={appdata} required/>
                    </div>
                    
                    </div>
                   

                    <div>
                    <input type='checkbox' name='agree' className='check-box' required/>  agree to terms & conditions
                    </div>
                    <div><button className='login-sub-button1-style' onClick={datasubmit}>SIGN UP</button></div>
                    {/* <div><button className='login-sub-button2-style'>Login Via OTP</button></div> */}
                </form>
            
    
            </div>
          
        </div>
    
    </>
      
    )
}

export default Signupsub
