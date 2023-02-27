import React from 'react'
import { Navigate } from 'react-router-dom';
import { useMicontexto } from '../contexto/contexto';

function Sopas() {
  const {state, send} = useMicontexto();
  const seguir = () =>{
      send('SIGUIENTE');
  }
  if(state.matches("sopas")){
      return (
          <>
          <h2 className='titulo1'>Hora de escoger una sopa</h2>
          <button onClick={seguir}>Siguiente</button>
          <div className="contenedor contenedor-sopas">
            aqui van las sopas
          </div>
          </>
        )
  }else{
      return (
          <Navigate to='/comidas'/>
      );
  }
}

export {Sopas}