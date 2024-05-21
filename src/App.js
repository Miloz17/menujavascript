import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navegacion/Navbar'
import Todos from './Components/Paginas/Todos';
import Entrada from './Components/Paginas/Entradas'; 
import Desayunos from './Components/Paginas/Desayunos';
import Comidas from './Components/Paginas/Comidas';
import Bebidas from './Components/Paginas/Bebidas';
import Almuerzos from "./Components/Paginas/Almuerzos";

function App(){

  return (
    <div className="App">
    
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact component={Todos}/>
        <Route path="/Entrada" component={Entrada}/>
        <Route path="/Desayunos" component={Desayunos}/>
        <Route path="/Almuerzos" component={Almuerzos}/>
        <Route path="/Comidas" component={Comidas}/>
        <Route path="/Bebidas" component={Bebidas}/>
      </Routes>
    </Router>
    
    </div>  
  );
}


export default App;

