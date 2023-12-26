import React from 'react'
import  "../Stylesheets/login.css"
import Signuplogin from '../Loginsubcompo/Signuplogin'

const Signup = () => {
  return (<>
  
   <div className='login-page-background'>
        <div className='login-sub-container'>
            <div  className='login-chair-image'><img className="SignIn-img" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/illustrated.webp" alt="Logo"/></div>
        <div className='login-achievers-container'>
            <div className='login-achievers-sub-con'>
            <div className='pb-logo'><img className="pb-logo-style" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/logo.webp" alt='not-loaded'/></div>
                <div className='small-con-2'>
                <div><img className="small-img-style" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/students.webp" alt="not-loaded"/></div>
                <div>
                    <div className='viewers-style'>10k+</div>
                    <span>students Enrolled</span>
                    
                </div>
                </div>
                <div className='small-con-1'>
                
                <div><img className="small-img-style" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/college.webp" alt="not-loaded"/></div>
                <div>
                    <div className='viewers-style'>1000+</div>
                    <span>Reach in Colleges</span>
                    
                </div>
                </div>
                <div className='small-con-1'>
                
                <div><img className="small-img-style" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/learning.webp" alt="not-loaded"/></div>
                <div>
                    <div className='viewers-style'>10k+</div>
                    <span>students Enrolled</span>
                    
                </div>
                </div>
                <div className='small-con-1'>
                
                <div><img className="small-img-style" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/social.webp" alt="not-loaded"/></div>
                <div>
                    <div className='viewers-style'>150k+</div>
                    <span>Social Community</span>
                    
                </div>
                </div>
            </div>
            <div className='login-container'>
                <Signuplogin />
                 </div>
        </div>
        </div>
        

      
    </div> 
  </>
   
  )
}

export default Signup
