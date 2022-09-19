import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from './Me.png'
import Social from './Socials'
import {FaCaretDown} from "react-icons/fa"

const header = () => {
  return (
    <header className='h-full pt-28 overflow-hidden'>
      <div className="container mx-auto text-center relative h-full md-">
        <h5>Hi i'm</h5>
        <h1>Lukman Olamide</h1>
        <h5 className="text-light">A Front End Web Developer</h5>
        <CTA/>
        <Social/>
        <div className="photo flex justify-center">
          <img src={Me} alt="me"  className='me w-80 mt-16 rounded-t-full overflow-hidden'/>
        </div>
        <a href="#contact" className='btn scroll_down md:absolute -right-10 lg:absolute lg:right-48 top-96'><FaCaretDown /></a>
      </div>
    </header>
  )
}

export default header