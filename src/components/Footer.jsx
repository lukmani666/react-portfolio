import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer className='py-10'>
      <a href="#" className="footer_logo text-4xl font-medium mb-8 inline-block">
        OLA_DEV
      </a>
      
      <ul className="permalink flex flex-wrap flex-col gap-4 md:flex-row justify-center lg:justify-center gap-8 mb-12">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials flex mb-11 justify-center lg:justify-center gap-4 mb-16">
        <a href="https://facebook.com/ademolaluqman.758" target="_blank" rel='noopener noreferrer'><FaFacebook /></a>
        <a href="https://instagram.com/ola_coder" target="_blank" rel='noopener noreferrer'><FiInstagram /></a>
        <a href="https://twitter.com/LukmanOlamide7?t=_YsTHtSE0HUJszjfWN9Bqg&s=09" target="_blank" rel='noopener noreferrer'><IoLogoTwitter /></a>
      </div>

      <div className="footer_copyright mb-20">
        <small>&copy; OLA_DEV. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer