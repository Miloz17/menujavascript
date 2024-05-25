import React, { forwardRef } from "react";
import imagenes from "../../assets/imagenes";


const Almuerzos = forwardRef((props, ref) => {

  return (
      <div className="container" ref={ref}>
      <h2>Almuerzos</h2>
      <div className='image-pair'>
      <img className='img' src={imagenes.hamburguesa} alt='Almuerzos' />
      <h2 className='text'>
        Carne de res
        <h6>Carne de res con papas a la francesa y ensalada: </h6>
        <h4>$30.000</h4> </h2>
    </div>

    <div className='image-pair'>
      <img className='img' src={imagenes.carne2} alt='trucha' />
      <h2 className='text'>
        Trucha
        <h6>Trucha con papas a la francesa y ensalada: </h6>
        <h4>$35.000</h4> </h2>
    </div>

    <div className='image-pair'>
      <img className='img' src={imagenes.carne3} alt='Pechuga' />
      <h2 className='text'>
        Pechuga
        <h6>Pechuga de pollo con papas a la francesa y ensalada: </h6>
        <h4>$27.000</h4> </h2>
    </div>
      </div>
  );

});

export default Almuerzos