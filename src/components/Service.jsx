import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './service.css'

const Service = () => {
  return (
    <section id='services'>
      <h5 className='text-center'>What I offer</h5>
      <h1 className="text-center">Services</h1>

      <div className="service_container grid px-3.5 md:grid-cols-2 gap-12 px-10
      lg:grid-cols-3 gap-12 lg:px-20 pt-10">
        <article className="service">
          <div className="service_head">
            <h3 className=''>UI/UX Design</h3>
          </div>

          <ul className="service_list p-0 md:p-8">
            <li>
              <BiCheck className='service_icon' />
              <p>Design the user experience and interface keeping the user needs in mind.</p>
            </li>
            <li>
              <BiCheck className='service_icon' />
              <p>Go through feedback on previous designs, and briefs for new projects,
                and coordinate with the team.
              </p>
            </li>
            <li>
              <BiCheck className='service_icon' />
              <p>Utilize the insights as inputs for their design decisions.</p>
            </li>
            <li>
              <BiCheck className='service_icon' />
              <p>Create prototypes for new product ideas.</p>
            </li>
            <li>
              <BiCheck className='service_icon' />
              <p>Combine creativity with an awareness of the design elements.</p>
            </li>
            <li>
              <BiCheck className='service_icon' />
              <p>Communicate with clients to understand their business goals and objectives.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3 className=''>Front End Development</h3>
          </div>

          <ul className="service_list p-0 md:p-8">
            <li>
              <BiCheck className='service_icon' />
              <p>Work with developers to design algorithms and flowcharts.</p>
            </li>
            <li>
              <BiCheck className='service_icon' />
              <p>Produce clean, efficient code based on specifications.</p>
            </li>
            <li>
              <BiCheck className='service_icon' />
              <p>Integrate software components and third-party programs.</p>
            </li>
            <li>
              <BiCheck className='service_icon' />
              <p>Verify and deploy programs and systems.</p>
            </li>
            <li>
              <BiCheck className='service_icon' />
              <p>Create technical documentation for reference and reporting.</p>
            </li>
            <li>
              <BiCheck className='service_icon' />
              <p>Creating tools that improve site interaction regardless of the browser.</p>
            </li>
            <li>
              <BiCheck className='service_icon' />
              <p>Developing and maintaining the user interface..</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3 className=''>Content Creation</h3>
          </div>

          <ul className="service_list p-0 md:p-8">
            <li>
              <BiCheck className='service_icon' />
              <p>Prepare well-structured drafts using digital publishing platforms.</p>
            </li>
            <li>
              <BiCheck className='service_icon' />
              <p>Identify client's needs and recommend new topics.</p>
            </li>
            <li>
              <BiCheck className='service_icon' />
              <p>Coordinate with marketing and design teams to illustrate articles.</p>
            </li>
            <li>
              <BiCheck className='service_icon' />
              <p>Promote content on social networks and monitor engagement.</p>
            </li>
            <li>
              <BiCheck className='service_icon' />
              <p>Research industry-related topics.</p>
            </li>
            <li>
              <BiCheck className='service_icon' />
              <p>Conduct keyword research and use SEO guidelines to optimize content.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service