import React from 'react'
import Photo from './Photo.png'
import './about.css'
import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5 className='text-center'>
        Get To Know
      </h5>
      <h1 className='text-center'>
        About Me
      </h1>
      <div className="container_about pt-12">
        <div className="about_me rounded-3xl">
          <div className="about_me-image">
            <img src={Photo} alt="me" className='me_about rounded-3xl'/>
          </div>
        </div>

        <div className="about_content">
          <div className="cards px-6">
            <div className="about_cards grid grid-cols-3 gap-3">
              <article className="about_card">
                <div className="about_first">
                  <div className="grid place-content-center">
                    <FaAward className='about_icon' />
                  </div>
                  <h5 className="">Experience</h5>
                  <small className="">4+ Years Working</small>
                </div>
              </article>

              <article className="about_card">
                <div className="grid place-content-center">
                  <FiUsers className='about_icon'/>
                </div>
                <h5 className="">Client</h5>
                <small className="">200+ Worldwide</small>
              </article>

              <article className="about_card">
                <div className="about_second">
                  <div className="grid place-content-center">
                    <VscFolderLibrary className='about_icon'/>
                  </div>
                  <h5 className="">Project</h5>
                  <small className="">20+ Completed</small>
                </div>
              </article>
            </div>

            <p className='mt-6 mx-0 mb-5'>
              I am a Front end Developer with 4 years commercial experience, 
              and graduate of Internet Technology.
              I create successful websites that are fast, easy to use, and built with best practices.
            </p>
            <p className='mb-5'>
              I have a special interest in use of animation on the web. 
              I particularly like working on websites that have seamless transitions and require
              high-level performance to maintain a smooth and appealing website.
            </p>
            <p className='mb-9'>
              My main experience is in front end development but I also have a passion for design. Given that 
              producing a modern website requires the combination of design, server technology, and the layer
              that users interacts with, I believe having experience in both design and development 
              allows for making the most optimal user experiences.
            </p>

            <a href="#contact" className='btn btn-primary'>Hire Me</a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About