import React from 'react';

const IconsComponent = () => {
  return (
    <div id="icon" className="container mt-5 mb-5">
      <div className="row justify-content-center text-center">
      <div className="col-auto">
      <a href="tel:+2348102569820">
            <i className="fas fa-phone fa-2x icon-style"></i>
          </a>
        </div>
        <div className="col-auto">  <a href="https://www.facebook.com/profile.php?id=100073282063905&mibextid=ZbWKwL" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x icon-style"></i>
          </a>
        </div>
       
        <div className="col-auto"> <a href="https://www.linkedin.com/in/nnakwe-chisom-16ba8229b"  rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x icon-style"></i>
          </a>
        </div>
        <div className="col-auto"> 
        <a href="mailto:Nnakwechris@gmail.com" className="icon-style">
        <i className="fas fa-envelope fa-2x"></i>
      </a>
        </div>
      </div>
    </div>
  );
};

export default IconsComponent;