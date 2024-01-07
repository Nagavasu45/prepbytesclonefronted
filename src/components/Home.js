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
          <img className='home-container3-sub1-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/stairs_of_approach(web).svg'/>
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
    
    
    </>)
}

export default Home
