import React from 'react'
import { Navigate } from 'react-router-dom';
import { useMicontexto } from '../contexto/contexto';

function Sopas() {
  const {state, send} = useMicontexto();
  const [mira, setMira] = React.useState('');
  const opciones = state.context.listaSopa;
  const seguir = () =>{
      send('SIGUIENTE', {nuevaSopa:mira});
  }
  if(state.matches("sopas")){
      return (
          <>
          <h2 className='titulo1'>Hora de escoger una sopa</h2>
          <p className="opcion">Mi sopa: {mira}</p>
          <button onClick={seguir}>Siguiente</button>
          <div className="contenedor contenedor-sopas">
            {opciones.map(elemento=>(
              <div className="caja" key={elemento.id} onClick={()=>setMira(elemento.nombre)}>
                <p className="texto">{elemento.nombre}</p>
              </div>
            ))}
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