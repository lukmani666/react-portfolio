import React from 'react'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

const Socials = () => {
  return (
    <div className='socials flex md:absolute flex-col -left-10 lg:flex-col items-center absolute lg:left-48 gap-4 top-96 text-2xl'>
      <a href="https://www.linkedin.com/messaging/thread/2-OTYyYzAzMWItMDZlOC00MmJkLWExMjMtN2M5NzI2YTA3Y2M1XzAxMw==/" target="_blank"  rel='noopener noreferrer'>
        <FaLinkedin />
      </a>
      <a href="https://github.com/lukmani666" target="_blank"  rel='noopener noreferrer'><FaGithub /></a>
      <a href="https://instagram.com/ola_coder" target="_blank"  rel='noopener noreferrer'><FaInstagram /></a>
    </div>
  )
}

export default Socials