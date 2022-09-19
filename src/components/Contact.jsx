import React, { useState, useEffect }from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import Modal from './Modal'

const Contact = () => {
  const [openModal, setOpenModal] = useState(false)

  const initialValues = {username: "", email: "", message: ""};
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({...formValues, [name]: value})
  };

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && setOpenModal) {
      console.log(formValues);
    }
  },[formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.username) {
      errors.username = "Please provide your name!"
    }
    if(!values.email) {
      errors.email = "Please provide your email!"
    }else if (!regex.test(values.email)) {
      errors.email = "This not a valid email format!"
    }
    if(!values.message) {
      errors.message = "Please write a message"
    }
    return errors;

  };
  
  const form = useRef();
  

  
  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setOpenModal(true);
    setFormValues(initialValues);
    
    emailjs.sendForm('service_sxwsvrv', 'template_01gu7ks', form.current, '7b4PFZtdsBHQd4BQr')
      
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  
  return (
    <section id='contact'>
      <h5 className="text-center">Get In Touch</h5>
      <h1 className="text-center">Contact Me</h1>
      
      <div className="contact_container grid grid-cols-1 place-content-center px-5 md:grid-cols-1 md:px-32 lg:grid-cols-2 py-10 gap-24 lg:px-40">
        <div className="contact_options">
          <article className="contact_option">
            <div className="icon grid place-content-center">
              <MdOutlineEmail className='contact_option-icon' />
            </div>
            <h4>Email</h4>
            <h5>olamidelukman3@gmail.com</h5>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrlFtsRdMRsKqQQGQtJSqZNSrvDZwhKtfrNDZXXLzvMWWxBvfvGWzBfDnfDBvJzPPKZBrL" target="_blank" rel='noopener noreferrer'>Send a message</a>
          </article>
          <article className="contact_option">
            <div className="icon grid place-content-center">
              <RiMessengerLine className='contact_option-icon' />
            </div>
            <h4>Messengers</h4>
            <h5>Ola_Dev</h5>
            <a href="https://www.facebook.com/ademolaluqman.758" target="_blank" rel='noopener noreferrer'>Send a message</a>
          </article>
          <article className="contact_option">
            <div className="icon grid place-content-center">
              <BsWhatsapp className='contact_option-icon' />
            </div>
            <h4>Whatsapp</h4>
            <h5>+2348054325762</h5>
            <a href="https://web.whatsapp.com/send?phone=+2348054325762" target="_blank" rel='noopener noreferrer'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className='grid gap-5' method='post'>
          <input type="text" name='username' onChange={handleChange} placeholder='Your Full Name' value={ formValues.username }/>
          <p className='text-red-500'>{ formErrors.username }</p>
          <input type="email" name='email' onChange={handleChange} placeholder='Your Email' value={ formValues.email }/>
          <p className='text-red-500'>{ formErrors.email }</p>
          <textarea name="message" rows="7" onChange={handleChange} placeholder='Your message' className='p-5' value={ formValues.message } ></textarea>
          <p className='text-red-500'>{ formErrors.message }</p>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
      {Object.keys(formErrors).length === 0 && setOpenModal ? (<Modal open={openModal} onClose={() => setOpenModal(false)} />)
      : setOpenModal}
    </section>
  )
}

export default Contact