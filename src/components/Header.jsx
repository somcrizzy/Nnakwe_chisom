import React from 'react'
import Logo from '../assets/muna.png'



function Header() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="/"><img src={Logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-auto">
        <a className="nav-link " aria-current="page" href="/">HOME</a>
        <a className="nav-link" href="/projects">PROJECTS</a>
        <a className="nav-link" href="/about">ABOUT ME</a>
        <a className="nav-link" href="/">CONTACT ME</a>
      </div>
      <div className="navbar">
        <a  href="https://wa.link/rd1qpo"   className='btn orange text-light'>Whatsapp</a>
      </div>
    </div>
  </div>
</nav>


    </>
  )
}

export default Header