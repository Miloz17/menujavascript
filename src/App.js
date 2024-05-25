import "./App.css";
import React, { useRef } from "react";
import Navbar from "./Components/Navegacion/Navbar";
import Recomendados from './Components/Recomendados';
import Entradas from './Components/Opciones/Entradas';
import Desayunos from "./Components/Opciones/Desayunos";
import Comidas from "./Components/Opciones/Comidas";
import Almuerzos from "./Components/Opciones/Almuerzos";
import Bebidas from "./Components/Opciones/Bebidas";
import Promociones from "./Components/Opciones/Promociones";
function App() {
  const entradasRef = useRef(null);
  const almuerzosRef = useRef(null);
  const comidasRef = useRef(null);
  const desayunosRef = useRef(null);
  const bebidasRef = useRef(null);
  const PromocionesRef = useRef(null);

  const desplazar = (section) => {
    if (section === "Entradas" && entradasRef.current) {
      entradasRef.current.scrollIntoView({ behavior: "smooth" }); 
    }
    if (section === "Almuerzos" && almuerzosRef.current) {
      almuerzosRef.current.scrollIntoView({ behavior: "smooth" }); 
    }
    if (section === "Comidas" && comidasRef.current) {
      comidasRef.current.scrollIntoView({ behavior: "smooth" }); 
    }
    if (section === "Desayunos" && desayunosRef.current) {
      desayunosRef.current.scrollIntoView({ behavior: "smooth" }); 
    }
    if (section === "Bebidas" && bebidasRef.current) {
      bebidasRef.current.scrollIntoView({ behavior: "smooth" }); 
    }
    if (section === "Almuerzos" && almuerzosRef.current) {
      almuerzosRef.current.scrollIntoView({ behavior: "smooth" }); 
    }
    if (section === "Promociones" && PromocionesRef.current) {
      PromocionesRef.current.scrollIntoView({ behavior: "smooth" }); 
    }
    
  };
  return (
    <div className="App">
      <Navbar desplazar = {desplazar}/>
      <Promociones ref={PromocionesRef} />
      <Entradas ref={entradasRef}/>
      <Desayunos ref={desayunosRef}/>
      <Almuerzos ref={almuerzosRef}/>
      <Comidas ref={comidasRef}/>
      <Bebidas ref={bebidasRef}/>
    </div>
  );
}

export default App;
