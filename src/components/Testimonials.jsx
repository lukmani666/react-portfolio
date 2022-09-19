import React from 'react'
import './testimonial.css'
import AVTR1 from './avater1.jpg'
import AVTR2 from './avater2.jpg'
import AVTR3 from './avater3.jpg'
import AVTR4 from './avater4.jpg'

import { Navigation  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5 className="text-center">Review From Clients</h5>
      <h1 className="text-center pb-10">Testimonials</h1>

      <Swiper className="testimonials_container md:mx-auto lg:mx-auto pt-20 pb-20 w-2/5"
       modules={[ Navigation ]}
       spaceBetween={40}
       slidesPerView={1}
       navigation>
      

        <SwiperSlide className="testimonial">
          <div className="client_avater">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client_name">Ernest Achiver</h5>
          <small className="client_review">
            How often do you find a resource that is not only great at what they do, but awesome 
            to work with? Lukman will fit the bill if you’re 
            looking for broad website expertise that will bring your website to new heights.
            He’s intelligent and diligent, and comes with the bonus of being easy to work with. 
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avater">
            <img src={AVTR2} alt="" />
          </div>
          <h5 className="client_name">Brain Kevin</h5>
          <small className="client_review">
            Lukman is a creative go-getter who truly enjoys his craft. He takes unparalleled pride 
            and effort in his work and doesn’t stop learning or experimenting to improve skills and 
            deliverables. He gave us a beautifully redesigned website and was there every step of the 
            way to make the transition smooth.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avater">
            <img src={AVTR3} alt="" />
          </div>
          <h5 className="client_name">Steven Kenneth</h5>
          <small className="client_review">
            Forward thinking, hardworking, proactive and motivated Front End Developer. 
            If you need a professional to do a job, make sure you have Lukman doing that job. 
            When you get to connect with him, you'll discover an amazing person with unique skills!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avater">
            <img src={AVTR4} alt="" />
          </div>
          <h5 className="client_name">Connie George</h5>
          <small className="client_review">
            Lukman is a fantastic front-end developer to work with, 
            he is able to quickly and concisely identify issues within project objectives,
            as well as ask for clarification regarding any open-ended project goals.
            Lukman is an intelligent and efficient worker. Working with him has been a pleasure.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials