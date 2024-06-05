import React from 'react'
import IconsComponent from './IconsComponents'
function About() {
  return (
    <>
       <div className="container-fluid text-center mt-4 pb-5 bg-dark text-light">
          <h1 className='mt-3 pt-5 text'>About Me</h1>
          <div className="row mt-5 ">
            <div className="col-md-6 mb-5" data-aos="fade-right">
            <h6>"Hello! I'm Nnakwe Munachisom, a frontend developer with a passion for creating robust and scalable web applications. With years of experience in the tech industry, I specialize in web creation, and I'm always eager to learn new technologies and improve my skills."</h6>
           <p>Frontend Developer | Wordpress Developer | Open Source Enthusiast | Tech Blogger</p>
           <h3 className='text'>My Journey:</h3>
           <h6>My path into web development started with a curiosity for how websites work and a desire to bring ideas to life through code. I began by teaching myself HTML and CSS, building simple static websites. As my interest grew, I delved into JavaScript, learning how to add interactivity and functionality to my projects. Over time, I expanded my skill set to include modern frameworks and libraries like React, Angular, and Vue.js, as well as server-side technologies like Node.js and Python.</h6>
            </div>
            <div className="col-md-6" data-aos="fade-up-left">
              <h3 className='text'>Skills:</h3>
              <h6>"Mastery of essential development tools and technologies is key to efficient workflow and high-quality code. These tools enhance my productivity and ensure seamless integration and deployment."
             </h6>
             <h6> HTML | CSS (Bootstrap) | JAVASCRIPT (Reactjs) | WORDPRESS | GIT/GITHUB </h6>
             <h3 className='text pt-4'>Certifications:</h3>
             <h6>Certified Front-End Web Developer (FreeCodeCamp,W3schools,Code Anambra)</h6>
             <p>Comprehensive training in HTML, CSS, JavaScript, and responsive web design.</p>
             <h6>React Development (Udacity & Code Anambra)</h6>
             <p>Advanced knowledge of React, Redux, and building dynamic web applications</p>
             <h6>Wordpress Web Development (Coursera & Code Anambra)</h6>
             <p>Understanding pluggins, templates: Building from scratch</p>
            </div>
          </div>
        </div>
        <div>
          <IconsComponent/>
        </div>

    </>
  )
}

export default About