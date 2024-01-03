import React, { useEffect, useState } from 'react'
import "../Stylesheets/selfinfo.css"

import axios from 'axios'



// const Selfinfo = () => {
//   const personname=localStorage.getItem("selfname")
//   const [boughtcourses, Setboughtcourses]=useState([])
  
//   const [loginout, setloginout] = useState(true);
//   const navigate=useNavigate();
  

 
  
//   useEffect(() => {
//     const buyData = async () => {
//       try {
//         const response = await axios.post('http://localhost:3410/bought');
//         Setboughtcourses(response.data)
//         console.log(boughtcourses)
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     buyData(); 
//   }, [boughtcourses]);
  
  
//   // axios.post("http://localhost:3410/bought")
//   // .then((res)=>{
//   //   Setboughtcourses(res.data)
//   //   console.log(boughtcourses)

//   // })
//   // .catch((error)=>{
//   //   console.log(error)
//   // })

//   // useEffect(() => {
//   //   const handleClickOutside = (event) => {
//   //     if (menuRef.current && !menuRef.current.contains(event.target)) {
//   //       setMenuVisible(false);
//   //     }
//   //   };

//   //   document.addEventListener('mousedown', handleClickOutside);

//   //   return () => {
//   //     document.removeEventListener('mousedown', handleClickOutside);
//   //   };
//   // }, []);

//   const logoutbtn2=()=>{
//     localStorage.clear()
//     setloginout(false)
//     navigate('/')
//   }
  
//   return (<>
//     <div className='dashboard-navbar-container2'>
//     <div className='header-logo2'><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg'  alt='not-loaded' className='logo-size'/></div>
//     {/* <div className='navbar-naming-styles' ><div className='text-round-style2' >{personname[0].toUpperCase()}</div><div className='naming-style' >{personname}</div> */}
//     <div className="dropdown1">
//             {/* <button className="dropbtn">Project <FontAwesomeIcon icon={faCaretDown} /></button> */}
//             <div className="dropdown1">
//             <div className='navbar-naming-styles  ' >
//               <div className='text-round-style2' >{personname[0].toUpperCase()}</div>
//               <div className='naming-style' >{personname}</div>
//               </div>
//               </div>
//             <div className="dropdown-content1">
//               <NavLink>Courses</NavLink>
//               <NavLink onClick={logoutbtn2}>logout</NavLink>
                

//             </div>
//       </div>
//     </div>
    
    
   
      
    
    
//     <div className='dashboard-navbar-container3'>
//       <div className='body-container1'><div className='courses-style-1'>Courses</div>
//       <div><hr/></div>
//       <div className='bought-courses-container'>

//       </div>
//       </div>
//     </div>
//     </>)
// }

// export default Selfinfo


const Selfinfo = () => {
  const [boughtcourses, Setboughtcourses]=useState([])
  useEffect(() => {
        const buyData = async () => {
         try {
            const response = await axios.post('https://prepbytesclonebackend.onrender.com/bought');
             Setboughtcourses(response.data)
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
          </>
        )
      })}
   
    </div>
    </>)
}

export default Selfinfo
