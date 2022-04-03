

import { Auto } from './Auto';

export const ListadoAutos = ({ autos, setAuto, eliminarAuto }) => {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {
          autos && autos.length ? (
            <>
               <h2 className='font-black text-3xl text-center'>Listado de Autos a revisar</h2>
                <p className='text-xl mt-5 mb-10 text-center'>
                  Administra los {''}
                  <span className='text-indigo-600 font-bold'>autos</span>
                </p>

                {
                  autos.map(  (auto )  => <Auto eliminarAuto={ eliminarAuto } setAuto={setAuto} key={auto.id} auto = {auto}/>)
                }
          </>
          ) : (
            <>
                <h2 className='font-black text-3xl text-center'>No hay autos registrados</h2>
                <p className='text-xl mt-5 mb-10 text-center'>
                  Comienza registrando autos {''}
                  <span className='text-indigo-600 font-bold'>y aparecerán en este lugar</span>
                </p>
            </>
          )
        }
      
    </div>
  )
}
