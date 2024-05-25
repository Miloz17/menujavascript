import React, { forwardRef } from "react";
import imagenes from "../../assets/imagenes";
const Bebidas = forwardRef((props, ref) => {
return (
  <div className="container" ref={ref}>
      
    <h1>Bebidas</h1>
    <div className="image-container">
      <div className='image-pair'>
        <img className='img' src={imagenes.cocaCola} alt='Coca Cola' />
        <button className="boton">Vista Previa</button>
        <h2 className='text'>
          Coca Cola 
          <h6>Coca Cola personal: </h6>
          <h4>$5.000</h4> </h2>
      </div>
    </div>

    <div className="image-container">
      <div className='image-pair'>
        <img className='img' src={imagenes.colombiana} alt='Colombiana' />
        <button className="boton">Vista Previa</button>
        <h2 className='text'>
          Colombiana
          <h6>gaseosas postobon, Colombiana: </h6>
          <h4>$3.000</h4> </h2>
      </div>
    </div>

    <div className="image-container">
      <div className='image-pair'>
        <img className='img' src={imagenes.manzana} alt='Manzana' />
        <button className="boton">Vista Previa</button>
        <h2 className='text'>
          Manzana
          <h6>gaseosas postobon, Manzana: </h6>
          <h4>$3.000</h4> </h2>
      </div>
    </div>

  </div>
);

});

export default Bebidas