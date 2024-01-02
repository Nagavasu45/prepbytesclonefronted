import React from 'react'
import "../Interviewnotesstyles/interviewnotes.css"
import { NavLink } from 'react-router-dom'

const Interviewnotes = () => {
  return (<>
  
    <div className='interviewnotes-main-container'>
    <div className='interviewnotes-sub-con-1'>
        <div className='browse-topics'>
        <div className='browse-topics-1'>
        <div className='text-line-interview'>Interview Notes:Browse by topics</div>
        <div className='browse-topics-sub-con'>
                    <div className='small-topic-container'>
                        <div className='yellow-topic-sub'>
                        </div>
                        <div className='yellow-topic-sub-down'>
                            <div>C</div>

                        </div>

                    </div>
                    <div className='small-topic-container'>
                        <div className='yellow-topic-sub'>
                        </div>
                        <div className='yellow-topic-sub-down'>
                            <div>C++</div>

                        </div>

                    </div>
                    <div className='small-topic-container'>
                        <div className='yellow-topic-sub'>
                        </div>
                        <div className='yellow-topic-sub-down'>
                            <div>Operating System</div>

                        </div>

                    </div>
                    
                    </div>
                    <div className='browse-topics-sub-con'>
                    <div className='small-topic-container'>
                        <div className='yellow-topic-sub'>
                        </div>
                        <div className='yellow-topic-sub-down'>
                            <div>Computer Networks</div>

                        </div>

                    </div>
                    <div className='small-topic-container'>
                        <div className='yellow-topic-sub'>
                        </div>
                        <div className='yellow-topic-sub-down'>
                            <div>Java</div>

                        </div>

                    </div>
                    </div>
                    </div>

        </div>
        <div className='browse-companys'>
            <div className='browse-comapanys-sub'> 
            <div className='browse-comapanys-sub-1'> Browse by companies
            </div>
            <div className='browse-comapanys-sub-2'>
                <div className='colored-box-1'></div>
                <div className='colored-box-right-text-1'><NavLink>Samsung</NavLink></div>
                </div>
                <div className='browse-comapanys-sub-2'>
                <div className='colored-box-1'></div>
                <div className='colored-box-right-text-2'><NavLink>Hcl</NavLink></div>
                </div>
                <div className='browse-comapanys-sub-2'>
                <div className='colored-box-1'></div>
                <div className='colored-box-right-text-3'><NavLink>Oracle</NavLink></div>
                </div>
                <div className='browse-comapanys-sub-2'>
                <div className='colored-box-1'></div>
                <div className='colored-box-right-text-4'><NavLink>Cognizant</NavLink></div>
                </div>
                <div className='browse-comapanys-sub-2'>
                <div className='colored-box-1'></div>
                <div className='colored-box-right-text-5'><NavLink>Mahindra-comviva</NavLink></div>
                </div>
                <div className='browse-comapanys-sub-2'>
                <div className='colored-box-1'></div>
                <div className='colored-box-right-text-6'><NavLink>Infoedge</NavLink></div>
                </div>
            <div className='browse-comapanys-sub-2'>
                <div className='colored-box-1'></div>
                <div className='colored-box-right-text-7'><NavLink>I&t-infotech</NavLink></div>
                </div>
                <div className='browse-comapanys-sub-2'>
                <div className='colored-box-1'></div>
                <div className='colored-box-right-text-8'><NavLink>Cisco</NavLink></div>
                </div>

            </div>

        </div>
        </div>

        

      
    </div>
    
    </>)
}

export default Interviewnotes
