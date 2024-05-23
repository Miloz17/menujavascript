import React from 'react'
import imagenes from '../../assets/imagenes'

export const Comidas = () => {
  return (
    <div className='container'>
    <h2>Comidas</h2>
      <div className='image-pair'>
            <img className='img' src={imagenes.entrada1} alt='Entrada' />
            <h2 className='text'>
                Pollo asado
                <h6>Pollo asado con papas a la francesa y ensalada, compralo hoy por tan solo: </h6>
                <h4>$25.000</h4> 
            </h2>
      </div>

      <div className='image-pair'>
        <img className='img' src={imagenes.entrada2} alt='Entrada 2' />
        <h2 className='text'>
          Papas a la francesa
          <h6>Porcion grande de papas a la francesa, compralo hoy por tan solo: </h6>
          <h4>$10.000</h4> </h2>
      </div>

      <div className='image-pair'>
        <img className='img' src={imagenes.entrada3} alt='Entrada 3' />
        <h2 className='text'>
          Hamburguesa especial
          <h6>hamburguesa especial con tocineta, queso y carne angús, compralo hoy por tan solo: </h6>
          <h4>$25.000</h4> </h2>
      </div>

      <div className='image-pair'>
        <img className='img' src={imagenes.entrada4} alt='Entrada 4' />
        <h2 className='text'>
          Pasteles de pollo
          <h6>Dos pasteles de pollo, compralo hoy por tan solo: </h6>
          <h4>$10.000</h4> </h2>
      </div>

      <div className='image-pair'>
        <img className='img' src={imagenes.hamburguesa} alt='Entrada 4' />
        <h2 className='text'>
          Pasteles de pollo
          <h6>Dos pasteles de pollo, compralo hoy por tan solo: </h6>
          <h4>$10.000</h4> </h2>
      </div>

      <div className='image-pair'>
        <img className='img' src={imagenes.hamburguesa3} alt='Entrada 4' />
        <h2 className='text'>
          Pasteles de pollo
          <h6>Dos pasteles de pollo, compralo hoy por tan solo: </h6>
          <h4>$10.000</h4> </h2>
      </div>

      <div className='image-pair'>
        <img className='img' src={imagenes.hamburguesa4} alt='Entrada 4' />
        <h2 className='text'>
          Pasteles de pollo
          <h6>Dos pasteles de pollo, compralo hoy por tan solo: </h6>
          <h4>$10.000</h4> </h2>
      </div>

      <div className='image-pair'>
        <img className='img' src={imagenes.carne1} alt='Entrada 4' />
        <h2 className='text'>
          Pasteles de pollo
          <h6>Dos pasteles de pollo, compralo hoy por tan solo: </h6>
          <h4>$10.000</h4> </h2>
      </div>

      <div className='image-pair'>
        <img className='img' src={imagenes.carne2} alt='Entrada 4' />
        <h2 className='text'>
          Pasteles de pollo
          <h6>Dos pasteles de pollo, compralo hoy por tan solo: </h6>
          <h4>$10.000</h4> </h2>
      </div>

      <div className='image-pair'>
        <img className='img' src={imagenes.carne3} alt='Entrada 4' />
        <h2 className='text'>
          Pasteles de pollo
          <h6>Dos pasteles de pollo, compralo hoy por tan solo: </h6>
          <h4>$10.000</h4> </h2>
      </div>
    </div>
  )
}
