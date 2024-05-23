import "./App.css";
import React from "react";
import Navbar from "./Components/Navegacion/Navbar";
import Recomendados from './Components/Recomendados';
import Entradas from './Components/Opciones/Entradas';
import Desayunos from "./Components/Opciones/Desayunos";
import { Comidas } from "./Components/Opciones/Comidas";
import Almuerzos from "./Components/Opciones/Almuerzos";
import Bebidas from "./Components/Opciones/Bebidas";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Recomendados />
      <Entradas />
      <Desayunos />
      <Almuerzos />
      <Comidas />
      <Bebidas />
    </div>
  );
}

export default App;
