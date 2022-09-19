import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './modal.css'

const Modal = ({ open, onClose }) => {
    if(!open) return null
  return (
    <div className='overlay'>
        <div className="flex justify-center">
            <div className="popup absolute rounded-lg w-72 md:w-96 lg:w-96 h-fit text-center p-7">
                <div className="popup_icon grid place-content-center">
                    <BiCheck className='text-7xl'/>
                </div>
                <h2 className='text-3xl mt-1.5 mb-2.5'>Thank You!</h2>
                <p>Your message has been successfully submitted. Thanks!</p>
                <button type='button' className='modal_btn grid w-full mt-7 p-2.5 rounded-md text-lg'
                onClick={onClose}>OK</button> 
            </div>
        </div>
    </div>
  )
}

export default Modal