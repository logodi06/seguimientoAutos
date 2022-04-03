// import { useState, useEffect } from 'react';
// import { Error } from './Error';

// export const Formulario = ( {setAutos, autos, auto, setAuto} ) => {

//   const [ nombre, setNombre ] = useState('');
//   const [ marca, setMarca ] = useState('');
//   const [ modelo, setModelo] = useState('');
//   const [ noPlaca, setNoPlaca ] = useState('');
//   const [ email, setEmail ] = useState('');
//   const [ fecha, setFecha ] = useState('');
//   const [ fallos, setFallos ] = useState('');

//   const [error, setError] = useState(false);

//   useEffect(() => {
//       //Editar el objeto, cada que los valores de auto cambia
//       if(Object.keys(auto).length > 0) {
//         setNombre(auto.nombre);
//         setMarca(auto.marca);
//         setModelo(auto.modelo);
//         setNoPlaca(auto.noPlaca);
//         setEmail(auto.email);
//         setFecha(auto.fecha);
//         setFallos(auto.fallos);
//       }
    
//   }, [auto])

//   //console.log(auto);
//   //console.log(nombre);

//   const generarId = () => {
//    const random = Math.random().toString(36).substring(2);
//    const fecha = Date.now().toString(36);

//    return random + fecha;
//   }
  
//   const handleSubmit = ( e ) => {
//       e.preventDefault();

//       //Validación del formulario
//       if ( [ nombre, marca, modelo, noPlaca, email, fecha, fallos ].includes('') ){
//         //console.log('Hay almenos un campo vacio');
//         setError(true);
//         return;
//       }

//       setError(false);

//       const objetoAuto = {
//         nombre,
//         marca,
//         modelo,
//         noPlaca,
//         email,
//         fecha, 
//         fallos,
      
//       }

//       if( auto.id ){
//         objetoAuto.id = auto.id;
//         //console.log(objetoAuto);
//         //console.log(auto);

//         const autoActualizado = autos.map( autoState => 
//           autoState.id === auto.id ? objetoAuto : autoState )
//           setAutos(autoActualizado);
//           setAuto({});
//       }else {
//         //Nuevo registro, al crear un nuevo registro de auto,
//         //se le agrega el atributo de ID pues si se edita ya no debe generarse otro id, por eso al crear el 
//         //objetoAuto no se coloca
//         objetoAuto.id = generarId()
//          setAutos([...autos,objetoAuto]);
//       }

//       setNombre('');
//       setMarca('');
//       setModelo('');
//       setNoPlaca('');
//       setEmail('');
//       setFecha('');
//       setFallos('');

//   }

//   return (
//     <div className="md:w-1/2 lg:w-2/5  md:h-screen overflow-y-scroll">
//         <h2 className='font-black text-3xl text-center'>Seguimiento de Autos</h2>

//         <p className='text-lg mt-5 text- mb-10 text-center'>Añade Autos y {''} 
//           <span className='text-indigo-600 font-bold '>Administralos</span>
//         </p>

//         <form onSubmit={ handleSubmit } className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5' >
//             {  error && <Error> <p>Todos los campos son obligatorios </p> </Error> }
//           {/* Forma de pasar props{  error && <Error mensaje='Todos los campos son obligatorios' />} */}
//         <div className='mb-5'>
//             <label 
//               htmlFor='propietario' 
//               className='block text-gray-700 uppercase font-bold'>
//                 Nombre del propietario: 
//             </label>
//             <input 
//                 id='propietario' 
//                 type="text" 
//                 placeholder='Nombre del propietario' 
//                 className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
//                 value={ nombre }
//                 onChange = { ( e )  => setNombre(e.target.value)}
//             />
//           </div>

//           <div className='mb-5'>
//             <label 
//               htmlFor='marca' 
//               className='block text-gray-700 uppercase font-bold'>
//                 Marca: 
//             </label>
//             <input 
//                 id='marca' 
//                 type="text" 
//                 placeholder='Marca del auto' 
//                 className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
//                 value={ marca }
//                 onChange = { ( e )  => setMarca(e.target.value)} 
//             />
//           </div>

//           <div className='mb-5'>
//             <label 
//               htmlFor='modelo' 
//               className='block text-gray-700 uppercase font-bold'>
//                 Modelo: 
//             </label>
//             <input 
//                 id='modelo' 
//                 type="text" 
//                 placeholder='Modelo del auto' 
//                 className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
//                 value={ modelo }
//                 onChange = { ( e )  => setModelo(e.target.value)} 
//             />
//           </div>

//           <div className='mb-5'>
//             <label 
//               htmlFor='placa' 
//               className='block text-gray-700 uppercase font-bold'>
//                 No. Placa: 
//             </label>
//             <input 
//                 id='placa' 
//                 type="text" 
//                 placeholder='Placa del auto' 
//                 className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
//                 value={ noPlaca }
//                 onChange = { ( e )  => setNoPlaca(e.target.value)}
//             />
//           </div>

//           <div className='mb-5'>
//             <label 
//               htmlFor='email' 
//               className='block text-gray-700 uppercase font-bold'>
//                 Email: 
//             </label>
//             <input 
//                 id='email' 
//                 type="email" 
//                 placeholder='Email contacto' 
//                 className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
//                 value={ email }
//                 onChange = { ( e )  => setEmail(e.target.value)} 
//             />
//           </div>

//           <div className='mb-5'>
//             <label 
//               htmlFor='registro' 
//               className='block text-gray-700 uppercase font-bold'>
//                 Fecha de registro: 
//             </label>
//             <input 
//                 id='registro' 
//                 type="date" 
//                 placeholder='Fecha de registro' 
//                 className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
//                 value={ fecha }
//                 onChange = { ( e )  => setFecha(e.target.value)}
//             />
//           </div>

//           <div className='mb-5'>
//             <label 
//               htmlFor='fallos' 
//               className='block text-gray-700 uppercase font-bold'>
//                 Describe los fallos: 
//             </label>
//             <textarea 
//               id="fallos"
//               className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
//               placeholder='Describe los fallos '
//               value={ fallos }
//               onChange = { ( e )  => setFallos(e.target.value)}
//             />
            
//           </div>
    
//           <input 
//             type="submit" 
//             value={ auto.id ? 'Editar auto' : 'Agregar auto'} 
//             className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors' />

//         </form>
//     </div>
        
      
//   )
// }


import { useState, useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { Error } from './Error';

export const Formulario = ( {setAutos, autos, auto, setAuto} ) => {

  // const [ nombre, setNombre ] = useState('');
  // const [ marca, setMarca ] = useState('');
  // const [ modelo, setModelo] = useState('');
  // const [ noPlaca, setNoPlaca ] = useState('');
  // const [ email, setEmail ] = useState('');
  // const [ fecha, setFecha ] = useState('');
  // const [ fallos, setFallos ] = useState('');
  const initialState = {
    nombre: '',
    marca: '',
    modelo: '',
    noPlaca: '',
    email: '',
    fecha: '',
    fallos: ''
  }
  const [ formValues, handleInputChange, reset ] = useForm( initialState );
  const { nombre, marca, modelo, noPlaca, email, fecha, fallos } = formValues;
  const [error, setError] = useState(false);

  useEffect(() => {
      //Editar el objeto, cada que los valores de auto cambia
      if(Object.keys(auto).length > 0) {
        reset( auto );
      }
    
  }, [auto])

  //console.log(auto);
  //console.log(nombre);

  const generarId = () => {
   const random = Math.random().toString(36).substring(2);
   const fecha = Date.now().toString(36);

   return random + fecha;
  }
  
  const handleSubmit = ( e ) => {
      e.preventDefault();

      //Validación del formulario
      if ( [ nombre, marca, modelo, noPlaca, email, fecha, fallos ].includes('') ){
        //console.log('Hay almenos un campo vacio');
        setError(true);
        return;
      }

      setError(false);

      const objetoAuto = {
        nombre,
        marca,
        modelo,
        noPlaca,
        email,
        fecha, 
        fallos,
      
      }

      if( auto.id ){
        objetoAuto.id = auto.id;
        //console.log(objetoAuto);
        //console.log(auto);

        const autoActualizado = autos.map( autoState => 
          autoState.id === auto.id ? objetoAuto : autoState )
          setAutos(autoActualizado);
          setAuto({});
      }else {
        //Nuevo registro, al crear un nuevo registro de auto,
        //se le agrega el atributo de ID pues si se edita ya no debe generarse otro id, por eso al crear el 
        //objetoAuto no se coloca
        objetoAuto.id = generarId()
         setAutos([...autos,objetoAuto]);
      }

      reset();

  }

  return (
    <div className="md:w-1/2 lg:w-2/5  md:h-screen overflow-y-scroll">
        <h2 className='font-black text-3xl text-center'>Seguimiento de Autos</h2>

        <p className='text-lg mt-5 text- mb-10 text-center'>Añade Autos y {''} 
          <span className='text-indigo-600 font-bold '>Administralos</span>
        </p>

        <form onSubmit={ handleSubmit } className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5' >
            {  error && <Error> <p>Todos los campos son obligatorios </p> </Error> }
          {/* Forma de pasar props{  error && <Error mensaje='Todos los campos son obligatorios' />} */}
        <div className='mb-5'>
            <label 
              htmlFor='propietario' 
              className='block text-gray-700 uppercase font-bold'>
                Nombre del propietario: 
            </label>
            <input 
                id='propietario' 
                autoComplete='off'
                type="text" 
                placeholder='Nombre del propietario' 
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                name = "nombre"
                value={ nombre }
                onChange = { handleInputChange }
            />
          </div>

          <div className='mb-5'>
            <label 
              htmlFor='marca' 
              className='block text-gray-700 uppercase font-bold'>
                Marca: 
            </label>
            <input 
                id='marca' 
                autoComplete='off'
                type="text" 
                placeholder='Marca del auto' 
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                name = 'marca'
                value={ marca }
                onChange = { handleInputChange } 
            />
          </div>

          <div className='mb-5'>
            <label 
              htmlFor='modelo' 
              className='block text-gray-700 uppercase font-bold'>
                Modelo: 
            </label>
            <input 
                id='modelo' 
                autoComplete='off'
                type="text" 
                placeholder='Modelo del auto' 
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                name = 'modelo'
                value={ modelo }
                onChange = { handleInputChange } 
            />
          </div>

          <div className='mb-5'>
            <label 
              htmlFor='placa' 
              className='block text-gray-700 uppercase font-bold'>
                No. Placa: 
            </label>
            <input 
                id='placa' 
                autoComplete='off'
                type="text" 
                placeholder='Placa del auto' 
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                name = 'noPlaca'
                value={ noPlaca }
                onChange = { handleInputChange }
            />
          </div>

          <div className='mb-5'>
            <label 
              htmlFor='email' 
              className='block text-gray-700 uppercase font-bold'>
                Email: 
            </label>
            <input 
                id='email' 
                autoComplete='off'
                type="email" 
                placeholder='Email contacto' 
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                name = 'email'
                value={ email }
                onChange = { handleInputChange } 
            />
          </div>

          <div className='mb-5'>
            <label 
              htmlFor='registro' 
              className='block text-gray-700 uppercase font-bold'>
                Fecha de registro: 
            </label>
            <input 
                id='registro' 
                autoComplete='off'
                type="date" 
                placeholder='Fecha de registro' 
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                name = 'fecha' 
                value={ fecha }
                onChange = { handleInputChange }
            />
          </div>

          <div className='mb-5'>
            <label 
              htmlFor='fallos' 
              className='block text-gray-700 uppercase font-bold'>
                Describe los fallos: 
            </label>
            <textarea 
              id="fallos"
              autoComplete='off'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              name = 'fallos'
              placeholder='Describe los fallos '
              value={ fallos }
              onChange = { handleInputChange }
            />
            
          </div>
    
          <input 
            type="submit" 
            value={ auto.id ? 'Editar auto' : 'Agregar auto'} 
            className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors' />

        </form>
    </div>
        
      
  )
}
