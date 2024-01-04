import React, { useEffect, useState } from 'react'
import "../Stylesheets/selfinfo.css"

import axios from 'axios'






const Selfinfo = () => {
  const [boughtcourses, Setboughtcourses]=useState([])
  useEffect(() => {
        const buyData = async () => {
         try {
            const response1 = await axios.post('https://prepbytesclonebackend.onrender.com/bought');
             Setboughtcourses(response1.data)
             console.log(boughtcourses)
         } catch (error) {
           console.error(error);
           }
         };
         buyData(); 
            },[boughtcourses]);
  return (<>
    <div className='dashboard-main-container'>

      {boughtcourses.map((item)=>{
        return(
          <>
          <div>
            {item.name}
          </div>
          <div>
            {item.name}
          </div>
          <div>
            {item.name}
          </div>
          <div>
            {item.name}
          </div>
          <div>
            {item.name}
          </div>
          <div>
            {item.name}
          </div>
          <div>
            {item.name}
          </div>
          <div>
            {item.name}
          </div>
          <div>
            {item.name}
          </div>
          <div>
            {item.name}
          </div>
          </>
        )
      })}
   
    </div>
    </>)
}

export default Selfinfo
