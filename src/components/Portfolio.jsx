import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className="text-center">My Recent Work</h5>
      <h1 className="text-center">Portfolio</h1>

      <div className="portfolio_container pt-10 gap-12">
        <div className='portfolio_top grid md:flex flex-row justify-center gap-10 px-10 lg:flex flex-row justify-center gap-12'>
          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src="https://cdn.dribbble.com/users/4678459/screenshots/14658796/media/ab20aacdebd85bce0dccf0305f4ae178.png?
                compress=1&resize=1000x750&vertical=top" 
              alt="" className='img' />
            </div>
            <h3>Ola's motor automative</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/lukmani666/Ola-s-code" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
              <a href="https://lukman-motors.netlify.app/" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>
            </div>
          </article>

          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src="https://scontent.flos5-2.fna.fbcdn.net/v/t1.6435-9/158261326_242189454251357_7219991952898730646_n.png?_nc_cat=107&ccb=1-7&_nc_sid=2c4854&_nc_ohc=7e1v4YFqNbsAX9Y14V4&_nc_ht=scontent.flos5-2.fna&oh=00_AT-Kd7Qjh1OkU9TTBHKwjaXJqiRgc9vzxi4ROpKxMlJBoA&oe=63351C5F
              "alt=""  className='img'/>
            </div>
            <h3>Super calculator</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/lukmani666/super-calc" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
              <a href="https://addvancecal.netlify.app/" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>
            </div>
          </article>

        </div>
        
        <div className='portfolio_top grid md:flex flex-row justify-center gap-10 px-10 lg:flex flex-row justify-center gap-12 pt-10'>
          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src="https://static.vecteezy.com/system/resources/previews/000/641/301/original/vector-web-login-form-template.jpg" 
              alt=""  className='img' />
            </div>
            <h3>React Login/Register</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/lukmani666/react-task-tracker" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
              <a href="https://react65.netlify.app/" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>
            </div>
          </article>

          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src="https://fireflies.ai/blog/content/images/2021/08/Untitled-design--10-.jpg" 
              alt=""  className='img' />
            </div>
            <h3>Voice speech color changer</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/lukmani666/voice-change" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
              <a href="https://voice001.netlify.app/" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Portfolio