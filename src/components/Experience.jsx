import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='text-center'>
        What Skills I Have
      </h5>
      <h1 className='text-center'>My Experience</h1>
      <div className="w-full experience_container mt-5">
        <div className="experience_front rounded-2xl">
          <h3 className='text-center mb-8'>Frontend Development</h3>
          <div className="experience_content grid grid-cols-2 gap-y-8 gap-x-20">
            <article className="experience_details">
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experiened</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experiened</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experiened</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experiened</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experiened</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experiened</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experiened</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience