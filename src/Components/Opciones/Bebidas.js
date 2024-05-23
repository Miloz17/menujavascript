import React from "react";
import imagenes from "../../assets/imagenes";
const Bebidas = () => {
return (
    <div className="container">
        <h1>Bebidas</h1>
        <div className='image-pair'>
        <img className='img' src={imagenes.cocaCola} alt='Coca Cola' />
        <h2 className='text'>
          Coca Cola 
          <h6>Coca Cola personal: </h6>
          <h4>$5.000</h4> </h2>
      </div>

      <div className='image-pair'>
        <img className='img' src={imagenes.colombiana} alt='Colombiana' />
        <h2 className='text'>
          Colombiana
          <h6>gaseosas postobon, Colombiana: </h6>
          <h4>$3.000</h4> </h2>
      </div>

      <div className='image-pair'>
        <img className='img' src={imagenes.manzana} alt='Manzana' />
        <h2 className='text'>
          Manzana
          <h6>gaseosas postobon, Manzana: </h6>
          <h4>$3.000</h4> </h2>
      </div>
    </div>
);

}

export default Bebidas