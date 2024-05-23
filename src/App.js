import "./App.css";
import React from "react";
import Navbar from "./Components/Navegacion/Navbar";
import Recomendados from './Components/Recomendados';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Recomendados />
    </div>
  );
}

export default App;
