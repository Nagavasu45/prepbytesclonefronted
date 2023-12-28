import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../Interviewnotesstyles/mocktests.css"
import { loadStripe } from '@stripe/stripe-js'
// import { loadStripe } from 'react-stripe-js'



const Mocktests = () => {
    const [booksdata,setbooksdata]=useState([])
    const [buyingbook,setbuyingbook]=useState([])
    
      // axios.post('http://localhost:3410/books')
      //     .then((res) => {
      //       setbooksdata(res.data)
      //       console.log(booksdata)
      //     })
      //     .catch((error) => {
      //       console.log(error);
           
      //     });

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post('http://localhost:3410/books');
            setbooksdata(response.data);
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData(); 
      }, []);
      // const checkitem=(id)=>{
      //   for (let i=0;i<booksdata.length;i++){
      //                 if(booksdata[i].id===id){
      //                     // setbuyingbook([booksdata[i]])
      //                     // console.log(buyingbook)
      //                     // console.log(typeof( buyingbook))
      //                     return [booksdata[i]]
      
      //                 }
      //             }

      // }
      const checkitem=(id)=>{
        for (let i=0;i<booksdata.length;i++){
                      if(booksdata[i].id===id){
                          booksdata[i]['useremail']=localStorage.getItem("selfdetails")
                          return [booksdata[i]]
      
                      }
                  }

      }
      const   dopayment=async (id)=>{
        const result=await checkitem(id)
        
        
        
        const stripe=await loadStripe(" pk_test_51OMERySJb30zHYKXhazWu96YHeq9esM7jjoHRU5Yl6OsFBFrIqAN4l6DR432lstZ8S1BEgMXk05yGcoIoqcZQ0FJ00fJW2eWVM")
const body={
  products:result
}
const headers={
  "content-Type":"application/json"
}
try {
  const response = await fetch("http://localhost:3410/createcheckout1", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const session = await response.json();
  console.log(session);

  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });

  if (result.error) {
    console.log(result.error);
  }
} catch (error) {
  console.error("Fetch error:", error);
}
    
    // const   dopayment=async (id)=>{
    //         for (let i=0;i<booksdata.length;i++){
    //             if(booksdata[i].id===id){
    //                 setbuyingbook([booksdata[i]])
    //                 console.log(buyingbook)
    //                 console.log(typeof( buyingbook))

    //             }
    //         }
    //         console.log(buyingbook)
            
            
    //         const stripe=await loadStripe(" pk_test_51OMERySJb30zHYKXhazWu96YHeq9esM7jjoHRU5Yl6OsFBFrIqAN4l6DR432lstZ8S1BEgMXk05yGcoIoqcZQ0FJ00fJW2eWVM")
    // const body={
    //   products:buyingbook
    // }
    // const headers={
    //   "content-Type":"application/json"
    // }
    // try {
    //   const response = await fetch("http://localhost:3410/createcheckout1", {
    //     method: "POST",
    //     headers: headers,
    //     body: JSON.stringify(body),
    //   });
    
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }
    
    //   const session = await response.json();
    //   console.log(session);
    
    //   const result = await stripe.redirectToCheckout({
    //     sessionId: session.id,
    //   });
    
    //   if (result.error) {
    //     console.log(result.error);
    //   }
    // } catch (error) {
    //   console.error("Fetch error:", error);
    // }
//     const response=await fetch("https://localhost:3410/createcheckout1",
//     {method:"POST",
//   headers:headers,
// body:JSON.stringify(body),

// }
//     );
//     const session=await response.json();
//     console.log(session)
//     const result=stripe.redirectToCheckout({
//       sessionId:session.id
//     });  
//     // localStorage.removeItem("value")
//     // navigate("/Success")
    
//     if(result.error){
//       console.log( result.error);
//     }  
    }
  return (<>
    <div className='mock-main-container'>
        <div  className='mock-sub-container'>
        {booksdata.map((item)=>{
            return(
            <div key={item.id}>
             <div> {item.id}</div>
            <div className='mock-sub-items'>
            <div> {item.bookname}</div>
            <div> {item.price}</div>
            <div><button onClick={()=>dopayment(item.id)}>payment</button></div>
            </div>
            </div>
            )
            
        })}
      </div>
    </div>
    </>)
}

export default Mocktests
