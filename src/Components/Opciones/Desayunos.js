import React, { forwardRef } from "react";
import imagenes from "../../assets/imagenes";
const Desayunos = forwardRef ((props, ref) => {
return (
    <div className="container" ref={ref}>
    <h2>Desayunos</h2>
      <div className='image-pair'>
        <img className='img' src={imagenes.pollo} alt='Entrada 4' />
        <h2 className='text'>
          Pollo asado
          <h6>Pollo asado con papas a la francesa y ensalada, compralo hoy por tan solo: </h6>
          <h4>$25.000</h4> </h2>
      </div>

      <div className='image-pair'>
        <img className='img' src={imagenes.entrada3} alt='Entrada 1' />
        <h2 className='text'>
          Papas a la francesa
          <h6>Porcion grande de papas a la francesa, compralo hoy por tan solo: </h6>
          <h4>$10.000</h4> </h2>
      </div>
    </div>
)

});

export default Desayunos