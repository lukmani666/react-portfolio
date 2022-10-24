import React from 'react'
import './portfolio.css'
import Login from './login.jpg'
import Speech from './speech.jpg'
import Cal from './cal.jpg'
import Car from './car.jpg'
import Chat from './chat.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className="text-center">My Recent Work</h5>
      <h1 className="text-center">Portfolio</h1>

      <div className="portfolio_container pt-10 gap-12">
        <div className='portfolio_top w-full grid px-2.5 md:flex flex-row justify-center gap-10 px-10 lg:flex flex-row justify-center gap-12'>
          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={Car} 
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
              <img src={Cal}
              alt=""  className='img'/>
            </div>
            <h3>Super calculator</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/lukmani666/super-calc" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
              <a href="https://addvancecal.netlify.app/" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>
            </div>
          </article>

        </div>
        
        <div className='portfolio_top w-full grid px-2.5 md:flex flex-row justify-center gap-10 px-10 lg:flex flex-row justify-center gap-12 pt-10'>
          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={Login} 
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
              <img src={Speech} 
              alt=""  className='img' />
            </div>
            <h3>Voice speech color changer</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/lukmani666/voice-change" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
              <a href="https://voice001.netlify.app/" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>
            </div>
          </article>
        </div>

        <div className='flex justify-center mt-10 w-full px-2.5 lg:flex justify-center'>
          <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={Chat} 
              alt=""  className='img' />
            </div>
            <h3>Chat app with authentication</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/lukmani666/react-chat-app" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
              <a href="https://react-chat-app-henna-eight.vercel.app/login" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Portfolio