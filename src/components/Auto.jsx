import React from 'react'

export const Auto = (  {auto, setAuto, eliminarAuto} ) => {

    const {nombre, marca, modelo, noPlaca, email, fecha, fallos, id} = auto;
    //console.log(marca);

    const handleEditar = (  ) =>{
      setAuto(auto);
      //console.log(auto);
    }

    const handleEliminar = () => {
      const respuesta = confirm('Deseas eliminar ese registro?');
      
      if( respuesta ) eliminarAuto( id )
    }
  return (
    <div className='mx-5 my-10 bg-white shadow-md py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase mx-5'>Propietario: {''}
          <span className='font-normal normal-case'>{nombre}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase mx-5'>Marca: {''}
          <span className='font-normal normal-case'>{marca}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase mx-5'>Modelo: {''}
          <span className='font-normal normal-case'>{modelo}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase mx-5'>No. placa: {''}
          <span className='font-normal'>{noPlaca}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase mx-5'>Email: {''}
          <span className='font-normal normal-case'>{email}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase mx-5'>Fecha de registro: {''}
          <span className='font-normal normal-case'>{fecha}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase mx-5'>Descripción de falla: {''}
          <span className='font-normal normal-case'>{fallos}</span>
        </p>

      <div className='flex justify-between mt-10'>
        <button onClick={ handleEditar  }
          type='button' className='mx-5 py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'>
            Editar
        </button>

        <button
          onClick={ handleEliminar } type='button' className='mx-5 py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'>
            Eliminar
        </button>
      </div>


      </div>
  )
}
