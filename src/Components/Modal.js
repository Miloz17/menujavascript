import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import imagenes from '../assets/imagenes';
const Modal = ({ isOpen, closeModal, content }) => {
  if (!isOpen) return null;

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <AiOutlineClose className='close-button' size={40} color='red' onClick={closeModal} cursor={'pointer'} />
        <div className='container2'>
          <div className="image-con">
            <div className='image-p'>
              <img className='img2' src={content.image} alt={content.alt} />
              <h2 className='text'>
                {content.title}
                <h6>{content.description}</h6>
                <h4>{content.price}</h4>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
