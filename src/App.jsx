import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Service from './components/Service'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='App'>

      <div class="snowflakes" aria-hidden="true">
        <div class="snowflake">
        ❅
        </div>
        <div class="snowflake">
        ❅
        </div>
        <div class="snowflake">
        ❆
        </div>
        <div class="snowflake">
        ❄
        </div>
        <div class="snowflake">
        ❅
        </div>
        <div class="snowflake">
        ❆
        </div>
        <div class="snowflake">
        ❄
        </div>
        <div class="snowflake">
        ❅
        </div>
        <div class="snowflake">
        ❆
        </div>
        <div class="snowflake">
        ❄
        </div>
      </div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App