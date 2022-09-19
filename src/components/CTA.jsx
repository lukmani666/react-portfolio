import React from 'react'
import CV from './CV.pdf'
const CTA = () => {
  return (
   <div className="cta mt-9 flex justify-center gap-5">
      <a href={CV} className='btn' download>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's talk</a>
   </div>
  )
}

export default CTA