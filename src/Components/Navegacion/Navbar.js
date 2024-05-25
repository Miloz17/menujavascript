import React from "react"
import imagenes from "../../assets/imagenes";

const Navbar =({desplazar}) => {
  return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className= "container-fluid"> 
      <img className='imgLogo' src={imagenes.logo} />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <button className="btn" onClick={() => desplazar('Promociones')}> Promociones</button>
            <button className="btn" onClick={() => desplazar('Entradas')}>Entradas </button>
            <button className="btn" onClick={()=> desplazar('Desayunos')}>Desayunos</button>
            <button className="btn" onClick={()=> desplazar('Almuerzos')}>Almuerzos</button>
            <button className="btn" onClick={()=> desplazar('Comidas')}>Comidas</button>
            <button className="btn" onClick={()=> desplazar('Bebidas')}>Bebidas</button>
          </div>
        </div>  
      </div>
    </nav> 
  </div>
  )
}

export default Navbar