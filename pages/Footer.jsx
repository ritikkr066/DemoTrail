import React from 'react'
// import '@/styles/globals.css'


const Footer1 = () => {
  return (
    <div>
      <footer className='sticky bottom-0'>
        <div class="container1 overflow-x-hidden sticky bottom-0">
            {/* <div class="logo">
                <img src="National_Institute_of_Technology,_Patna_Logo.png" alt=""/>
            </div> */}
    
            <div className='flex flex-col ' >
              <div class="content flex flex-col md:flex-row w-full justify-center  ">
                <div className='flex flex-col items-center justify-center sm:flex-row'>
                <div class="box flex flex-col items-center px-4">
                  <h4>Solutions</h4>
                  <ul>
                    <li>Control</li>
                    <li>Scalability &amp; Effciency</li>
                    <li>Supported by Experts</li>
                    <li>Performance &amp; Security</li>
                  </ul>
                </div>
        
                <div class="box px-4">
                  <h4>Links</h4>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Work</li>
                    <li>Journey</li>
                  </ul>
                </div>
                </div>
        <div className='flex flex-col items-center justify-center sm:flex-row' >
                <div class="box  px-4">
                  <h4>Resources</h4>
                  <ul>
                    <li>Case Studies</li>
                    <li>Blog</li>
                    <li>I am a Clients</li>
                  </ul>
                </div>
        
                <div class="box px-4">
                  <h4>Company</h4>
                  <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                </div>
        
                <div class="box">
                  
                    <div>
                  <div class="icon flex1">
                    <i class="fab fa-weixin" aria-hidden="true"></i>
                    <i class="fab fa-qq" aria-hidden="true"></i>
                    <i class="fab fa-youtube" aria-hidden="true"></i>
                    <i class="fab fa-twitter" aria-hidden="true"></i>
                    <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                  </div>
                  </div>
                </div>
              </div>
              
              <div class=" flex-col flex">
                <div class="box">
                <p>Copyright (c) 2021 Copyright Naem Azam  All Rights Reserved.</p>
                </div>
                <div class="box flex">
                <p><a href="https://github.com/naemazam">GitHub</a></p>
                  
                </div>
                <div class="text">
                    <span>000-000-000</span>
                    <label> Address</label>
                    <label>yourname@mit.edu</label>
                    <p>Cambridge,United States</p>
                  </div>
             </div>
             </div>
    </div>
    </footer>
    
    </div>
    
  )
};

export default Footer1;
