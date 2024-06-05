import React from 'react'
import som from '../assets/somcrizzy.png'
import IconsComponent from './IconsComponents'


function Homepage() {
  return (
    <>
    <div className="bg-dark text-light" style={{minHeight:'500px'}}>
<div className="container">
    <div className="row ">
        <div className="col-md-8 mt-5 py-5 " data-aos="zoom-in">
            <h1>"Building Innovative <span className='text'>Solutions</span> with Code"</h1>
        <h5>"I'm Nnakwe Munachisom, a frontend developer with a passion for creating robust and scalable web applications. With years of experience in the tech industry, I specialize in web creation, and I'm always eager to learn new technologies and improve my skills."</h5>
      <p>Frontend Developer | Wordpress Developer | Open Source Enthusiast | Tech Blogger</p>
      <button className='orange text-light mx-3 mt-2' onClick={() => window.location.href = '/projects '}>View My Project's</button>
      <button className='orange text-light' onClick={() => window.location.href = '#contact'}><a href="#icon" className='text-decoration-none text-light'>Get in Touch</a></button>
    </div>
    
        <div className="col-md-4" data-aos="zoom-in-left">
            <img src={som}className='img-fluid'     alt="img" />
            </div>
    </div>
</div>
</div>
<div className="container text-center">
    <h2 className=' mt-5'>Programming Languages:</h2>
    <h6>"I am proficient in a variety of programming languages that enable me to develop robust and efficient solutions. My expertise includes all the frontend Basics, Frameworks ,Libraries and Wordpress development, allowing me to build comprehensive applications from scratch."</h6>

   
      <h4 className="mt-5" >DREAM ASPIRATION:</h4>
      <p>To be counted among the professional tech developers in the society promoting socio-cultural activities through technology and innovation.

       Building human capital development to help in advancing the societal behavioural act. Transmitting of knowledge ,ideas and information through Tech.

       Enjoy the top-notch of a responsive websits and a wonderful UI design  by contacting me.</p>
    </div>
   

   <div className="bg-dark mt-5" style={{minHeight:'200px',padding:'20px 0'}}>
    <div className="container pt-5">
      <div className="row d-flex justify-content-center" data-aos="flip-left">
      <div className="col-md-8 text-light">
      <h1>Ready to Transform Your Ideas into Reality?</h1>
      <h6>"Whether you're looking to build a cutting-edge web application, streamline your frontend services, or bring a new digital experience to life, I'm here to help. Let's create something amazing together.</h6>
      </div>
      <div className="col-md-4 text-md-end text-sm-start ">
      <button className='orange text-light mx-3 mt-2' onClick={() => window.location.href = '/projects '}>View My Project's</button>
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

export default Homepage