import imagenes from "../../assets/imagenes";
import React, { forwardRef, useState } from "react";
import Modal from "../Modal";

const Promociones = forwardRef((props,ref) => {
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
  <h2>Promociones</h2>

  <div className="image-container">
    <div className='image-pair'>
      <img className='img' src={imagenes.carne1} alt='Almuerzos' />
      <button className="boton" onClick={() => openModal('modal1')}>Vista Previa</button>
      <Modal isOpen={isModalOpen.modal1} closeModal={() => closeModal('modal1')} content={imagenes.carne1Content} />
      <h2 className='text'>
      Carne de res
      <h6>Carne de res con papas a la francesa y ensalada: </h6>
      <h4>$30.000</h4> </h2>
    </div>
  </div>
  </div>

)

});

export default Promociones