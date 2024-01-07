import React from 'react'
import "../courseandprogramstyle/fullstack.css"

const Fullstack = () => {
  const Fullstackdata=[
    {
      id:1,
      imagesrc:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_competitive.png",
      name:"Competitive Programming",
      text:"Competitive Programming questions solved by top rated cooders",
      cat:"videotutorials",
  },

  {
      id:2,
      imagesrc:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_interview.png",
      name:"Interview Preparation",
      text:"Commonly asked coding interview questions solved step by step",
      cat:"videotutorials",
  },

  {
      id:3,
      imagesrc:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_ds.png",
      name:"Data Structures and Algorithms",
      text:"Basic concepts of Data Structures and Algo and Ds/Algo problems solved",
      cat:"videotutorials",
  },

  {
      id:4,
      imagesrc:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_aptitude.png",
      name:"Aptitude",
      text:"Aptitude practice questions and puzzles to boost your thinking brain",
      cat:"videotutorials",
  },

  {
      id:5,
      imagesrc:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_cpp.png",
      name:"C++ Programming",
      text:"Deep dive into the fundamentals of C++ programming",
      cat:"videotutorials",
  },

  {
      id:6,
      imagesrc:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_os.png",
      name:"Operating System",
      text:"Learn in-depth concepts of Operating Systems easily.",
      cat:"videotutorials",
    },
  ]
  return (<>
    <div className='full-main-container'>
      <div className='full-sub-container1'>
        <div className='full-sub-container1-item1'>
          <div className='full-sub-container1-item1-text1'>Prepbytes Video Library</div>
          <div className='full-sub-container1-item1-text2'>Increase your knowledge with PrepBytes free videos. PrepBytes video library is a repository of more than 250 videos containing videos on Competitive Programming , Language Fundamentals - C, C++, Java, Data Structures and Algorithms, Aptitude, Operating System,
             Interview Questions and much more all at one place.
          </div>

        </div>
        <div className='full-sub-container1-item2'>
        <img className="full-sub-container1-item2-imgsize " src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/video_lib_illustration.png' alt='Not-loaded' />
        </div>

      </div>
      <div className='full-sub-container2'>
        CATEGORIES
        <div className='full-sub-container2-text1'>
        <hr  />
        </div>
        
      </div>
      <div className='full-sub-container3'>
        {Fullstackdata.map((item)=>{
          return(
            <>
             <div className='full-sub-container3-itemssize'>
          <div><img className='full-sub-container3-itemssize-imgsize' src={item.imagesrc}  alt='no-loaded'/></div>
            <div className='full-sub-container3-itemssize-text1'>{item.name}</div>
            <div className='full-sub-container3-itemssize-text2'>{item.text}</div>
            <div className='full-sub-container3-sub'>
          <div >
            <img className='full-sub-container3-sub-text1' src='data:image/svg+xml;base64,PHN2ZyBpZD0ieW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjguMTI2IiBoZWlnaHQ9IjI4LjEyNiIgdmlld0JveD0iMCAwIDI4LjEyNiAyOC4xMjYiPgogIDxwYXRoIGlkPSJQYXRoXzY3NyIgZGF0YS1uYW1lPSJQYXRoIDY3NyIgZD0iTTIyNC4xMTMsMjE1Ljk4NWw2LjktMy45NzMtNi45LTMuOTczWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuOTcyIC0xOTcuNzgxKSIgZmlsbD0iIzcyODM5YyIvPgogIDxwYXRoIGlkPSJQYXRoXzY3OCIgZGF0YS1uYW1lPSJQYXRoIDY3OCIgZD0iTTE0LjA2MywwQTE0LjA2MywxNC4wNjMsMCwxLDAsMjguMTI2LDE0LjA2MywxNC4wNjUsMTQuMDY1LDAsMCwwLDE0LjA2MywwWk0yMi44NSwxNC4wNzdhMjMuMjExLDIzLjIxMSwwLDAsMS0uMzYyLDQuMjI3LDIuMiwyLjIsMCwwLDEtMS41NDksMS41NDksNTMuNDUsNTMuNDUsMCwwLDEtNi44NzYuMzYyLDUxLjUzOCw1MS41MzgsMCwwLDEtNi44NzYtLjM3NkEyLjIsMi4yLDAsMCwxLDUuNjM4LDE4LjI5YTIzLjEwOSwyMy4xMDksMCwwLDEtLjM2Mi00LjIyNywyMy4yLDIzLjIsMCwwLDEsLjM2Mi00LjIyN0EyLjI0NywyLjI0NywwLDAsMSw3LjE4Nyw4LjI3M2E1My40NTEsNTMuNDUxLDAsMCwxLDYuODc2LS4zNjIsNTEuNDI5LDUxLjQyOSwwLDAsMSw2Ljg3Ni4zNzYsMi4yLDIuMiwwLDAsMSwxLjU0OSwxLjU0OUEyMi4wMjYsMjIuMDI2LDAsMCwxLDIyLjg1LDE0LjA3N1ptMCwwIiBmaWxsPSIjNzI4MzljIi8+Cjwvc3ZnPgo=' alt='Not Found' /></div>
          <div  className='full-sub-container3-sub-text2' >44 Videos</div>
          </div>
        </div>
        
            </>
          )
        })}
       

      </div>

      
    </div>
    </>)
}

export default Fullstack
