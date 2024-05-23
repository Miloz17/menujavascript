import React from "react"


const Navbar =({desplazar}) => {
  return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className= "container-fluid"> 
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <button className="btn" onClick={desplazar}>Todos <span class="sr-only">(current)</span></button>
            <button className="btn" to= "/Entradas">Entradas </button>
            <button className="btn" to="/Desayunos">Desayunos</button>
            <button className="btn" to="/Almuerzos">Almuerzos</button>
            <button className="btn" to="/Comidas">Comidas</button>
            <button className="btn" to="/Bebidas">Bebidas</button>
          </div>
        </div>
      </div>
    </nav> 
  </div>
  )
}

export default Navbar