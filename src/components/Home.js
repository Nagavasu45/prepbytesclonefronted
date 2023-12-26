import React from 'react';

import "../Stylesheets/Home.css";



const Home = () => {
  return (<>
  
  

    
        <div className='body-container-1'>
            <div className='para-container-item1'> 
                <div className='para-style-1'>Start Your journey of success</div>
                
                <div className='para-style-2'>Personalised Coding Programs <br/> to make coding easier for you</div>
                <br/>
                
                
                <div className='para-style-3'>Want to know how PrepBytes can help you?</div>
                <br/>
                
                <div className='button-style'>
                <button className='para-style-button'>Know More</button>
                </div>
            </div>
            

            <div className='para-container-item2'>
            <img  className='para-container-subimg' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Masterhead(web).svg" alt="header"/>
                
            </div>

        </div>
      <div className='cards-container'>
     
        <div><img className='cards' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Google-launchpad.webp "  alt='not loaded'/></div>
        <div><img className='cards' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/future-skills-homepage.webp "  alt='not loaded'/></div>
        <div><img className='cards' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/she-leads.webp "  alt='not loaded'/></div>
        <div><img className='cards' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aws-ed-start.webp" height="57" width="130"  alt='not loaded'/></div>
        
      </div>
      
    
    
    </>)
}

export default Home
