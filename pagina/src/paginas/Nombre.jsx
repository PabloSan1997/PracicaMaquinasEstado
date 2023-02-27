import React from 'react'
import { Navigate } from 'react-router-dom';
import { useMicontexto } from '../contexto/contexto';

function Nombres() {
  const {state, send} = useMicontexto();
  const [texto, setTexto]=React.useState('');
  const siguiente = (e)=>{
    e.preventDefault();
    send('SIGUIENTE');
  }
  if(state.matches('nombre')){
    return (
      <>
      <h2>Ya casi acabamos</h2>
      <form className="conenedor-nombre" onSubmit={siguiente}>
        <label htmlFor="#texto">Escriba su nombre</label>
        <input type="text" className='entrada' id="texto" value={texto} onChange={(e)=>setTexto(e.target.value)}/>
        <button className='boton' type='submit'>Mandar</button>
      </form>
      </>
    )
  }else{
    return <Navigate to="/mandado"/>
  }
}

export {Nombres}