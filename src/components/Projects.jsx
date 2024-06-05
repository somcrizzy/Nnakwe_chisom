import React from 'react'
import munachi from '../assets/munachi.png'
import iphone from '../assets/iphone.png'
import nolly from '../assets/nolly.jpg'
import IconsComponent from './IconsComponents'

function Projects() {
  return (
    <>
      
      <div className="container text-center mt-4 pb-5">
        <h3>My Projects:</h3>
       <h6 className='mt-3'>Explore my diverse portfolio of projects that showcase my expertise and creativity. From innovative web applications to cutting-edge mobile solutions, each project reflects my commitment to quality and excellence. Discover how i bring ideas to life, delivering impactful and user-friendly experiences tailored to meet my clients' need.</h6>
    </div>
    
      
   

   
   
   <div className="container-fluid pt-5 bg-dark text-light pb-5">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-5" data-aos="zoom-in">
          <div className="card" style={{ width: '100%' }}>
            <img src={munachi}className='img-fluid'     alt="img" />
            <div className="card-body">
              <h5 className="card-title text-center text mt-3">Shipping Website</h5>
              <p className="card-text">In today's fast-paced world, efficient and reliable shipping is crucial for success. With a deep understanding of logistics and supply chain management, I have developed innovative solutions that ensure timely and secure delivery of goods.</p>
              <h6> LANGUAGE: HTML | CSS (Bootstrap) | JAVASCRIPT (Reactjs) </h6>
              <div className="text-center">
                 <a href="https://logistics-livid.vercel.app/" className="btn bg-dark text-light linked-button ">
                 <i className="fas fa-arrow-up"></i> view Site
               </a>
               <a href="https://github.com/somcrizzy/logistics" className="btn bg-dark text-light linked-button mr-5">
               <i className="fa fa-code"></i> View Code
               </a>
              </div>
             
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-5" data-aos="zoom-in">
          <div className="card" style={{width: '100%' }}>
            <img src={iphone}className='img-fluid'     alt="img" />
            <div className="card-body">
              <h5 className="card-title text-center text mt-5">Iphone Webapp Clone</h5>
              <p className="card-text">Explore the latest in phone gadget innovation, designed to enhance your mobile experience. From sleek accessories to powerful devices, my portfolio showcases a range of products that combine functionality with style. Discover how these cutting-edge gadgets can transform your everyday tech  .</p>
              <h6> LANGUAGE: HTML | CSS  | JAVASCRIPT  </h6>
              <div className="text-center">
                <a href="#" className="btn bg-dark text-light  linked-button ">
                 <i className="fas fa-arrow-up"></i> view Site
               </a>
               <a href="#" className="btn bg-dark text-light  linked-button mr-5">
               <i className="fa fa-code"></i> View Code
               </a>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4" data-aos="zoom-in">
          <div className="card" style={{ width: '100%' }}>
            <img src={nolly}className='img-fluid'     alt="img" />
            <div className="card-body">
              <h5 className="card-title text-center text mt-5 ">Nollywood Playhouse Academy</h5>
              <p className="card-text">Welcome to our Acting Academy, where passion meets professionalism. Our comprehensive programs are designed to nurture talent and cultivate skills, providing aspiring actors with the tools they need to succeed on stage and screen.</p>
              <h6> LANGUAGE: WORDPRESS </h6>
              <div className="text-center">
                 <a href="https://nollywoodplayhouse.com/" className="btn bg-dark text-light linked-button ">
                 <i className="fas fa-arrow-up"></i> view Site
               </a>
               <a href="https://wordpress.org" className="btn bg-dark text-light linked-button mr-5">
               <i className="fa fa-code"></i> View Code
               </a>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center">
      <div className="container mt-5">
        <h2>Let's Connect Together!</h2>
      
      <IconsComponent />

     
      </div>
    </div>
    
    </>
  )
}

export default Projects