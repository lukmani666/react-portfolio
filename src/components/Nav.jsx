import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {AiOutlineUser} from 'react-icons/ai'
import {FiBookOpen} from 'react-icons/fi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageRounded} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [active, setActive] = useState('#')
  return (
    <nav className='p-3 px-7 flex fixed bottom-10
      gap-4 text-2xl rounded-full w-min'>
      <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><GoHome /></a>
      <a href="#about" onClick={() => setActive('#about')}className={active === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}>
        <FiBookOpen />
      </a>
      <a href="#services"  onClick={() => setActive('#services')} className={active === '#services' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href="#contact"  onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}>
        <BiMessageRounded />
      </a>
    </nav>
  )
}

export default Nav