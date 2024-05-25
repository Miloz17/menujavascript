import React, { useRef } from "react";
import Navbar from "../Navegacion/Navbar";

const Todos = () => {
    const sectionRef = useRef(null);

    const desplazar = () => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };
return (
    <div>
      <Navbar desplazar={desplazar} />
      <div style={{ marginTop: "1000px" }} ref={sectionRef}>
        <h2>Sección de Todos</h2>
        <p>Esta es la sección a la que se desplazará.</p>
      </div>
    </div>

)

}

export default Todos