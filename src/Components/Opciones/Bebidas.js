import React, { forwardRef, useState } from "react";
import imagenes from "../../assets/imagenes";
import Modal from "../Modal";

const Bebidas = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
  });

  const openModal = (modalId) => {
    setIsModalOpen(prevState => ({
      ...prevState,
      [modalId]: true
    }));
  };

  const closeModal = (modalId) => {
    setIsModalOpen(prevState => ({
      ...prevState,
      [modalId]: false
    }));
  };

return (
  <div className="container" ref={ref}>
      
    <h1>Bebidas</h1>
    <div className="image-container">
      <div className='image-pair'>
        <img className='img' src={imagenes.cocaCola} alt='Coca Cola' />
        <button className="boton" onClick={() => openModal('modal1')}>Vista Previa</button>
          <Modal isOpen={isModalOpen.modal1} closeModal={() => closeModal('modal1')} content={imagenes.cocaColaContent} />
        <h2 className='text'>
          Coca Cola 
          <h6>Coca Cola personal: </h6>
          <h4>$5.000</h4> </h2>
      </div>
    </div>

    <div className="image-container">
      <div className='image-pair'>
        <img className='img' src={imagenes.colombiana} alt='Colombiana' />
        <button className="boton" onClick={() => openModal('modal1')}>Vista Previa</button>
          <Modal isOpen={isModalOpen.modal1} closeModal={() => closeModal('modal1')} content={imagenes.colombianaContent} />
        <h2 className='text'>
          Colombiana
          <h6>gaseosas postobon, Colombiana: </h6>
          <h4>$3.000</h4> </h2>
      </div>
    </div>

    <div className="image-container">
      <div className='image-pair'>
        <img className='img' src={imagenes.manzana} alt='Manzana' />
        <button className="boton" onClick={() => openModal('modal1')}>Vista Previa</button>
          <Modal isOpen={isModalOpen.modal1} closeModal={() => closeModal('modal1')} content={imagenes.manzanaContent} />
        <h2 className='text'>
          Manzana
          <h6>Gaseosas Postobon, Manzana: </h6>
          <h4>$3.000</h4> </h2>
      </div>
    </div>

  </div>
);

});

export default Bebidas