import React, { forwardRef, useState } from "react";
import imagenes from "../../assets/imagenes";
import Modal from "../Modal";



const Desayunos = forwardRef ((props, ref) => { 
    const [isModalOpen, setIsModalOpen] = useState({
      modal1: false,
      modal2: false,
    
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
    <h2>Desayunos</h2>

    <div className="image-container">
      <div className='image-pair'>
        <img className='img' src={imagenes.pollo} alt='Entrada 4' />
        <button className="boton" onClick={() => openModal('modal1')}>Vista Previa</button>
          <Modal isOpen={isModalOpen.modal1} closeModal={() => closeModal('modal1')} content={imagenes.entrada1Content} />
        <h2 className='text'>
          Pollo asado
          <h6>Pollo asado con papas a la francesa y ensalada, compralo hoy por tan solo: </h6>
          <h4>$25.000</h4> 
        </h2>
      </div>
    </div>

    <div className="image-container">
      <div className='image-pair'>
        <img className='img' src={imagenes.entrada3} alt='Entrada 1' />
        <button className="boton" onClick={() => openModal('modal2')}>Vista Previa</button>
          <Modal isOpen={isModalOpen.modal2} closeModal={() => closeModal('modal2')} content={imagenes.entrada2Content} />
        <h2 className='text'>
          Papas a la francesa
          <h6>Porcion grande de papas a la francesa, compralo hoy por tan solo: </h6>
          <h4>$10.000</h4> </h2>
      </div>
    </div>

  </div>
)

});

export default Desayunos