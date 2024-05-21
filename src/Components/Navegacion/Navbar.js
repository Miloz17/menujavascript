import React from "react"
import {Link} from "react-router-dom"

const navbar =() => {

    return (
        <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav mx-auto">
      <Link className="nav-item nav-link active" to="/">Todos <span class="sr-only">(current)</span></Link>
      <Link className="nav-item nav-link" to= "/Entradas">Entradas</Link>
      <Link className="nav-item nav-link" to="/Desayunos">Desayunos</Link>
      <Link className="nav-item nav-link" to="/Almuerzos">Almuerzos</Link>
      <Link className="nav-item nav-link" to="/Comidas">Comidas</Link>
      <Link className="nav-item nav-link" to="/Bebidas">Bebidas</Link>
      
    </div>
  </div>
</nav> 



        </div>
    )
}

export default navbar