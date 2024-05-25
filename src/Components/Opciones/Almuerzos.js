import React, { forwardRef, useState } from "react";
import imagenes from "../../assets/imagenes";
import Modal from "../Modal";



const Almuerzos = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
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

      <h2>Almuerzos</h2>
      <div className='image-pair'>
      <img className='img' src={imagenes.carne1} alt='Almuerzos' />
      <h2 className='text'>
        Carne de res
        <h6>Carne de res con papas a la francesa y ensalada: </h6>
        <h4>$30.000</h4> </h2>
    </div>

      <div className="image-container">
        <div className='image-pair'>
          <img className='img' src={imagenes.carne2} alt='trucha' />
          <button className="boton" onClick={() => openModal('modal1')}>Vista Previa</button>
          <Modal isOpen={isModalOpen.modal2} closeModal={() => closeModal('modal2')} content={imagenes.entrada1Content} />
          <h2 className='text'>
            Trucha
            <h6>Trucha con papas a la francesa y ensalada: </h6>
            <h4>$35.000</h4> </h2>
        </div>
      </div>

      <div className="image-container">
        <div className='image-pair'>
          <img className='img' src={imagenes.carne3} alt='Pechuga' />
          <button className="boton" onClick={() => openModal('modal1')}>Vista Previa</button>
          <Modal isOpen={isModalOpen.modal3} closeModal={() => closeModal('modal3')} content={imagenes.entrada1Content} />
          <h2 className='text'>
            Pechuga
            <h6>Pechuga de pollo con papas a la francesa y ensalada: </h6>
            <h4>$27.000</h4> </h2>
        </div>
      </div>

    </div>
  );

});

export default Almuerzos