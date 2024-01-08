import React from 'react';

import "../Stylesheets/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


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
      <div className='home-container3'>
        <div className='home-container3-sub1'>
          <img className='home-container3-sub1-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/stairs_of_approach(web).svg' alt='not-loaded'/>
        </div>
        <div className='home-container3-sub2'>
          <div className='home-container3-sub2-text1'>How PrepBytes Mentorship driven Personalised Learning works?</div>
          <div className='home-container3-sub2-item1'>
            <div className='item1-sub1'>
              <div className='item1-sub1-text1'>
              PERSONALISED LECTURES & WEEKLY PLAN
              </div>
              <div className='item1-sub2-text1'>
              Get learning videos & weekly plan based on your coding skills
              <img className='icon1-positon-setup' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/personalised_learning.svg' alt='not-loaded'/>
              </div>
            </div>
            <div className='item1-sub2'>
              <div className='item1-sub2-arrow1'><img  src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjEiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOSAxLjAxNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik02NjgsNDc3MS4xNTRzMTM5LjE4OS0yNywxMzIuNjQ0LDc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY3Ljk5OSAtNDc2Ny45MTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogICAgPHBhdGggaWQ9Ikljb25faW9uaWMtaW9zLWFycm93LWJhY2siIGRhdGEtbmFtZT0iSWNvbiBpb25pYy1pb3MtYXJyb3ctYmFjayIgZD0iTTIuOTUsOC41NTgsOS40MjgsMi4wODVBMS4yMjMsMS4yMjMsMCwwLDAsNy43LjM1N0wuMzU2LDcuNjkxQTEuMjIxLDEuMjIxLDAsMCwwLC4zMjEsOS4zNzhMNy42OSwxNi43NjNhMS4yMjMsMS4yMjMsMCwwLDAsMS43MzMtMS43MjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuODggODQuOTM4KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==' alt='not-loaded'/>
              </div>
            </div>           
            
            
          </div>



          <div className='home-container3-sub2-item2'>
          <div className='item2-sub1'>
              <div className='item2-sub2-arrow2'>
                <img  src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjIiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjE1NykiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik04MDAuODY2LDQ3NzEuMTU0cy0xMzkuMTg5LTI3LTEzMi42NDQsNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuODY2IC00NzcyLjA2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgICA8cGF0aCBpZD0iSWNvbl9pb25pYy1pb3MtYXJyb3ctYmFjayIgZGF0YS1uYW1lPSJJY29uIGlvbmljLWlvcy1hcnJvdy1iYWNrIiBkPSJNMi45NSw4LjU2Mmw2LjQ3OCw2LjQ3MkExLjIyMywxLjIyMywwLDAsMSw3LjcsMTYuNzYyTC4zNTYsOS40MjhBMS4yMjEsMS4yMjEsMCwwLDEsLjMyMSw3Ljc0MUw3LjY5LjM1N0ExLjIyMywxLjIyMywwLDAsMSw5LjQyMywyLjA4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODAuNzk2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==' alt='not-loaded'/>
              </div>
            </div>
          <div className='item2-sub2'>
          <div className='item2-sub2-text1'>
          PERSONALISED CODING ASSIGNMENTS
              </div>
              <div className='item2-sub2-text2'>
              Get learning videos & weekly plan based on your coding skills
              <img className='icon1-positon-setup' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/code_live_with_experts.svg' alt='not-loaded'/>
              </div>
            </div> 
            
            
            
          </div>


          <div className='home-container3-sub2-item3'>
            <div className='item3-sub1'>
              <div className='item3-sub1-text1'>
              PERSONALISED LECTURES & WEEKLY PLAN
              </div>
              <div className='item3-sub2-text1'>
              Get learning videos & weekly plan based on your coding skills
              <img className='icon1-positon-setup' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/ask_doubts_totally_live.svg' alt='not-loaded'/>
              </div>
            </div>
            <div className='item3-sub2'>
              <div className='item1-sub2-arrow1'><img  src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjEiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOSAxLjAxNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik02NjgsNDc3MS4xNTRzMTM5LjE4OS0yNywxMzIuNjQ0LDc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY3Ljk5OSAtNDc2Ny45MTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNCIvPgogICAgPHBhdGggaWQ9Ikljb25faW9uaWMtaW9zLWFycm93LWJhY2siIGRhdGEtbmFtZT0iSWNvbiBpb25pYy1pb3MtYXJyb3ctYmFjayIgZD0iTTIuOTUsOC41NTgsOS40MjgsMi4wODVBMS4yMjMsMS4yMjMsMCwwLDAsNy43LjM1N0wuMzU2LDcuNjkxQTEuMjIxLDEuMjIxLDAsMCwwLC4zMjEsOS4zNzhMNy42OSwxNi43NjNhMS4yMjMsMS4yMjMsMCwwLDAsMS43MzMtMS43MjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuODggODQuOTM4KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==' alt='not-loaded'/>
              </div>
            </div>           
            
            
          </div>



          <div className='home-container3-sub2-item4'>
          <div className='item4-sub1'>
              <div className='item4-sub2-arrow2'>
                <img  src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuMTkiIGhlaWdodD0iODUuOTUzIiB2aWV3Qm94PSIwIDAgMTQxLjE5IDg1Ljk1MyI+CiAgPGcgaWQ9Ikdyb3VwXzQ5MjIiIGRhdGEtbmFtZT0iR3JvdXAgNDkyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjE1NykiPgogICAgPHBhdGggaWQ9IlBhdGhfNTE1MyIgZGF0YS1uYW1lPSJQYXRoIDUxNTMiIGQ9Ik04MDAuODY2LDQ3NzEuMTU0cy0xMzkuMTg5LTI3LTEzMi42NDQsNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuODY2IC00NzcyLjA2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0Ii8+CiAgICA8cGF0aCBpZD0iSWNvbl9pb25pYy1pb3MtYXJyb3ctYmFjayIgZGF0YS1uYW1lPSJJY29uIGlvbmljLWlvcy1hcnJvdy1iYWNrIiBkPSJNMi45NSw4LjU2Mmw2LjQ3OCw2LjQ3MkExLjIyMywxLjIyMywwLDAsMSw3LjcsMTYuNzYyTC4zNTYsOS40MjhBMS4yMjEsMS4yMjEsMCwwLDEsLjMyMSw3Ljc0MUw3LjY5LjM1N0ExLjIyMywxLjIyMywwLDAsMSw5LjQyMywyLjA4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgODAuNzk2KSByb3RhdGUoLTkwKSIgZmlsbD0iIzQyNDI0MiIvPgogIDwvZz4KPC9zdmc+Cg==' alt='not-loaded'/>
              </div>
            </div>
          <div className='item4-sub2'>
          <div className='item4-sub2-text1'>
          PERSONALISED CODING ASSIGNMENTS
              </div>
              <div className='item4-sub2-text2'>
              Get learning videos & weekly plan based on your coding skills
              <img className='icon1-positon-setup' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/personalised_practice.svg' alt='not-loaded'/>
              </div>
            </div> 
            
            
            
          </div>
          <div className='home-container3-sub2-item4'> 
            <img  src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/achieve_your_coding_dream.svg' alt='not-loaded' />
          </div>
          {/* https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/achieve_your_coding_dream.svg */}
        </div>

      </div>
      <div className='home-container4'>
        I WANT TO
      </div>
      <div className='home-container5'>
        <div className='home-container5-item1'>
          <img className='home-container5-imgdimentions' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/prepare_for_campus.webp" alt='not-loaded'/>
          
          <div className='home-container5-item1-text'>PREPARE FOR CAMPUS PLACEMENTS</div>
          <FontAwesomeIcon  className='home-container-rightarrow' icon={faArrowRight} /> 

        </div>
        <div className='home-container5-item2'>
        <img className='home-container5-imgdimentions' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/master_competetive_pgm.webp" alt='not-loaded'/>
        <div className='home-container5-item2-text'>MASTER COMPETITIVE PROGRAMMING</div>
         
          <FontAwesomeIcon  className='home-container-rightarrow' icon={faArrowRight} /> 

        

        </div>
        <div className='home-container5-item3'>
        <img className='home-container5-imgdimentions' src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/learn_full_stack.webp" alt='not-loaded'/>
        <div className='home-container5-item3-text'>BUILD DEVELOPMENT PROJECTS</div>
         
          <FontAwesomeIcon  className='home-container-rightarrow' icon={faArrowRight} /> 

       

        </div>

      </div>

      <div className='home-container6'>
        <div className='home-container6-sub1'>
          <div className='home-container6-sub1-item1'>Are you an Experienced Professional willing to Switch?</div>
          <div className='home-container6-sub1-item2'>
            <img className='home-container6-sub1-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/industry_vetted_curriculum.svg' alt='not-loaded'/>
            <div className='home-container6-sub1-item2-text'>INDUSTRY VETTED CURRICULUM STRUCTURED FOR YOU</div>
          </div>

          <div className='home-container6-sub1-item2'>
            <img className='home-container6-sub1-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/real_life_projects.svg' alt='not-loaded'/>
            <div className='home-container6-sub1-item2-text'>REAL LIFE PROJECTS BUILT ON DEMAND TECH STACK</div>
          </div>

          <div className='home-container6-sub1-item2'>
            <img className='home-container6-sub1-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/exclusive_placement.svg' alt='not-loaded'/>
            <div className='home-container6-sub1-item2-text'>EXCLUSIVE PLACEMENT SUPPORT TEAM WITH JOB GURANTEE</div>
          </div>
          <div className='home-container6-sub1-item3'>PrepBytes Elevation Academy - 4 months Full Stack Program with Job Guarantee</div>
          <div><button className='home-container6-sub1-item4'>Know More</button></div>
        </div>
        <div >
          <img className='home-container6-sub2' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/for_2020(1st+Image).svg' alt='not-loaded'/>
        </div>
        <div className='home-container6-sub3'>
          <img className='home-container6-sub3-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/tools_for_2020.svg' alt='not-loaded'/>
          <br/>
          <img className='home-container6-sub3-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/for_2020_image_2.svg'alt='not-loaded'/>
        </div>


      </div>

      <div className='home-container7'>
        <div className='home-container7-flex'>
        <div className='home-container7-sub1'>
          <div className='home-container7-sub1-item11'>
          <img className='home-container7-sub1-item1' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor.png' alt='not-loaded'/>
          </div>
        <div className='home-container7-sub1-item2'>Mamta Kumari </div>
        <div className='home-container7-sub1-item3'>Co-Founder PrepBytes </div>
       
        <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png' alt='not-loaded'/>
      </div>
      </div>
      <div className='home-container7-sub2'>
        <div className='home-container7-sub2-item1'>
        Attend Free sessions with industry experts and get valuable guidance
        </div>
        <div className='home-container7-sub2-item2'>
        How to master competitive coding?
        </div>
        <div >
        <button className='home-container7-sub2-item3'>Know more</button>
        </div>
        <hr/>
        <div className='home-container7-sub2-item4'>
        How to crack coding interviews?
        </div>
        <div >
        <button className='home-container7-sub2-item5'>Know more</button>
        </div>

      </div>
      </div>
      <div className='home-container7-sub3'>
        <div className='home-container7-sub3-item1'>
          <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/100k_coding.svg' alt='not-loaded' />
          </div>
          <div className='home-container7-sub3-item1-text1'>  100k+ </div>
          <div className='home-container7-sub3-item1-text2'>  Coding </div>
          <div className='home-container7-sub3-item1-text2'>  Community </div>
       
        </div>
        <div className='home-container7-sub3-item1'>
          <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/1000%2B_hours_pf.svg' alt='not-loaded' />
          </div>
          <div className='home-container7-sub3-item1-text1'>  1000+ </div>
          <div className='home-container7-sub3-item1-text2'>  Hours of live </div>
          <div className='home-container7-sub3-item1-text2'>  session </div>
       
        </div>
        <div className='home-container7-sub3-item1'>
          <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/10000_hours_learning.svg' alt='not-loaded' />
          </div>
          <div className='home-container7-sub3-item1-text1'>  10000+ </div>
          <div className='home-container7-sub3-item1-text2'>  Hours of learning </div>
          <div className='home-container7-sub3-item1-text2'>   </div>
       
        </div>
        <div className='home-container7-sub3-item1'>
          <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/doubts_solved.svg' alt='not-loaded' />
          </div>
          <div className='home-container7-sub3-item1-text1'>  700k+ </div>
          <div className='home-container7-sub3-item1-text2'>  Doubts solved </div>
          <div className='home-container7-sub3-item1-text2'>  </div>
       
        </div>
       </div>
      </div>
      
      <div className='home-container8'>
        <div ><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Bespoke+Mentors.webp' alt='not-loaded'/></div>
      </div>
      <div className='home-container9'> 
      <div>100% of our students finishing the</div>
      <div>course have got placed</div>
      </div>
      <div className='home-container10'>
        <img className='home-container10-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/placed-students-mobile.jpg' alt='not-loaded'/>
      </div>
      <div className='home-container11'>
      PrepBytes Mentors

      </div>
      <div className='home-container12'>
      PrepBytes students get mentored by industry experts who have achieved in

      </div>
      <div className='home-container13'>
      their careers and are passionate about helping students achieve their dream.

      </div>
      <div className='home-container14'>
      <div className='home-container14-sub'>
        <div className='home-container14-sub-item1'>
          <img className='home-container14-sub-item1-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aditya_mentor_background.png' alt='not-loaded'/>
          <div className='home-container14-sub-item2' >
            
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Aditya_bhusan.png' alt='not-loaded'/>
          </div>
          <div className='home-container14-sub-item3'>
        Aditya
        </div>
        <div className='home-container14-sub-item4'>
        Co-Founder, PrepBytes
        </div>
        <div className='home-container14-sub-item5'>
        Aditya has over 5 years of industry experience and has been part of multiple hiring sprees. He is a placement expert and knows very well what is required to nail it in interviews.
        </div>
        <div>
          <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png' alt='not-loaded' />
        </div>
        </div>
        
        

      </div>


      <div className='home-container14-sub'>
        <div className='home-container14-sub-item1'>
          <img className='home-container14-sub-item1-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aditya_mentor_background.png' alt='not-loaded'/>
          <div className='home-container14-sub-item2' >
            
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aveek_sir.png' alt='not-loaded'/>
          </div>
          <div className='home-container14-sub-item3'>
          Aveek
        </div>
        <div className='home-container14-sub-item4'>
        Mentor, PrepBytes
        </div>
        <div className='home-container14-sub-item5'>
        Aveek is a Technical Content Engineer / Mentor at PrepBytes and has mentored more than 2500 students to date. His teaching methodology is very engaging and highly appreciated by students
        </div>
        <div>
          <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/PrepBytes.png' alt='not-loaded' />
        </div>
        </div>
        
        

      </div>

      <div className='home-container14-sub'>
        <div className='home-container14-sub-item1'>
          <img className='home-container14-sub-item1-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aditya_mentor_background.png' alt='not-loaded'/>
          <div className='home-container14-sub-item2' >
            
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/kunal_sir.png' alt='not-loaded'/>
          </div>
          <div className='home-container14-sub-item3'>
          Kunal


        </div>
        <div className='home-container14-sub-item4'>
        SDE, Amazon
        </div>
        <div className='home-container14-sub-item5'>
        Kunal loves competitive programming and likes to spend time teaching students. He has secured under 100 rank in various coding challenges and 287th rank in Google Kickstart.
        </div>
        <div>
          <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png' alt='not-loaded' />
        </div>
        </div>
        
        

      </div>

      <div className='home-container14-sub'>
        <div className='home-container14-sub-item1'>
          <img className='home-container14-sub-item1-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aditya_mentor_background.png' alt='not-loaded'/>
          <div className='home-container14-sub-item2' >
            
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/virali_vora.png' alt='not-loaded'/>
          </div>
          <div className='home-container14-sub-item3'>
          Virali


        </div>
        <div className='home-container14-sub-item4'>
        SDE, Google
        </div>
        <div className='home-container14-sub-item5'>
        Virali is one of the top coders of the country. She has mentored thousands of students at PrepBytes and has motivated them to think big and achieve big.
        </div>
        <div>
          <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Google_logo.png' alt='not-loaded' />
        </div>
        </div>
        
        

      </div>

      <div className='home-container14-sub'>
        <div className='home-container14-sub-item1'>
          <img className='home-container14-sub-item1-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aditya_mentor_background.png' alt='not-loaded'/>
          <div className='home-container14-sub-item2' >
            
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/kushdeep_sir.png' alt='not-loaded'/>
          </div>
          <div className='home-container14-sub-item3'>
          Kushdeep


        </div>
        <div className='home-container14-sub-item4'>
        SDE, Sharechat
        </div>
        <div className='home-container14-sub-item5'>
        He is a Competitive Programmer with some achievements like 5 stars at Codechef and a Specialist at Codeforces. He loves to guide students in achieving their goals .
        </div>
        <div>
          <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/sharechat.png' alt='not-loaded' />
        </div>
        </div>
        
        

      </div>

      <div className='home-container14-sub'>
        <div className='home-container14-sub-item1'>
          <img className='home-container14-sub-item1-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aditya_mentor_background.png' alt='not-loaded'/>
          <div className='home-container14-sub-item2' >
            
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Aditya_bhusan.png' alt='not-loaded'/>
          </div>
          <div className='home-container14-sub-item3'>
        Aditya
        </div>
        <div className='home-container14-sub-item4'>
        Co-Founder, PrepBytes
        </div>
        <div className='home-container14-sub-item5'>
        Aditya has over 5 years of industry experience and has been part of multiple hiring sprees. He is a placement expert and knows very well what is required to nail it in interviews.
        </div>
        <div>
          <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Amazon%2Bsam.png' alt='not-loaded' />
        </div>
        </div>
        
        

      </div>

      </div>
      <div className='home-container15'>
        <img className='home-container15-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/campus-business-manager/banner/CBM-WEB.webp' alt='not-loaded'/>
        <div className='home-container15-sub1'>
          <div className='home-container15-sub1-item1'>Want to represent your college?</div>
          <div className='home-container15-sub1-item2'>Join prepbytes campus Bussiness Manager<br/>intership program</div>
          <div><button className='home-container15-sub1-item3'>Join Now</button></div>
        </div>
      </div>
      <div className='home-container16'>
      PrepBytes for Mentors & Colleges

      </div>
      <div className='home-container17'>
      "Join PrepBytes in the journey to reach more colleges and mentor more students"

      </div>
      <div className='home-container18'>
        <div className='home-container18-items'>
          <div><img className='home-container18-items-sub1' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/be_a_part_of_mentors.png' alt='not-loaded'/>
          </div>
          <div className='home-container18-items-sub2'> Be a part of growing Mentor Community of PrepBytes</div>
          <div className='home-container18-items-sub3'> We look forward to industry experts who have a passion for teaching, mentoring & making students future-ready</div>
          <div><button className='home-container18-items-sub4'>Know more </button></div>
        </div>
        <div className='home-container18-items'>
          <div><img className='home-container18-items-sub1' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/be_a_part_of_mentors.png' alt='not-loaded'/>
          </div>
          <div className='home-container18-items-sub2'> Futuristic ALGO-driven Personalised learning module for your college</div>
          <div className='home-container18-items-sub3'> Every Student is different, hence their Learning should also be. Get in touch with to understand how PrepBytes can help students in your college</div>
          <div><button className='home-container18-items-sub4'>Know more </button></div>
        </div>
        

      </div>

      <div className='home-container19'>
        <div className='home-container19-sub1'>Most Popular Blogs</div>
        <div className='home-container19-sub2'> 
        <div className='home-container19-sub2-item1'>
          <img className='home-container19-sub2-item1-imgsize' src='https://blog-images-upload.s3.ap-south-1.amazonaws.com/blog_top_50_interview_questions_answers.png' alt='not-loaded' />
          <div className='home-container19-sub2-item1-text1'>Top 50 C Programming Interview Questions and Answers</div>
          <div className='home-container19-sub2-item1-text2'>Read Now</div>
        
        </div>


        <div className='home-container19-sub2-item1'>
          <img className='home-container19-sub2-item1-imgsize' src='https://s3.ap-south-1.amazonaws.com/blog-images-upload/blog_vinit_story.png' alt='not-loaded' />
          <div className='home-container19-sub2-item1-text1'>Motivational Story : He got his first placement success after being rejected by 22 companies</div>
          <div className='home-container19-sub2-item1-text2'>Read Now</div>
        
        </div>


        <div className='home-container19-sub2-item1'>
          <img className='home-container19-sub2-item1-imgsize' src='https://blog-images-upload.s3.ap-south-1.amazonaws.com/blog_top_50_interview_questions_answers.png' alt='not-loaded' />
          <div className='home-container19-sub2-item1-text1'>Lyrics from the famous track aptly describes the situation of every fresher when it comes to facing the interview</div>
          <div className='home-container19-sub2-item1-text2'>Read Now</div>
        
        </div>
        
        
        </div>
      </div>
    
    </>)
}

export default Home
