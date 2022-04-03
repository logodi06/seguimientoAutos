import { useState, useEffect } from "react"
import { Formulario } from "./components/Formulario"
import Header from "./components/Header"
import { ListadoAutos } from "./components/ListadoAutos"

function App() {

 const [autos, setAutos] = useState([]);
 const [auto, setAuto] = useState({});

 useEffect(() => {
    const obtenerLocalStorage = () => {
      //los ?? [] significa que si no hay nada en el localStorage agregale un []
      const autosLS = JSON.parse(localStorage.getItem('autos')) ?? [];
      setAutos(autosLS);
    }
    obtenerLocalStorage();
   
 }, [])
 

 useEffect(() => {
    localStorage.setItem('autos', JSON.stringify(autos));
 }, [autos])
 

 const eliminarAuto =  id  => {
    const eliminarAuto = autos.filter(  autoSelect  => autoSelect.id !== id );
    setAutos( eliminarAuto );
 }

  return (
    < div className="container mx-auto mt-12" >
      <Header />
      <div className="mt-12 md:flex">
          <Formulario setAutos={ setAutos } autos={ autos } auto={ auto } setAuto={ setAuto } />
          <ListadoAutos autos={ autos } setAuto = { setAuto } eliminarAuto={ eliminarAuto } />
      </div>
    </ div >
  ) 
}

export default App
