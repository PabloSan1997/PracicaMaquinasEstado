import React from 'react'
import { useMicontexto } from '../contexto/contexto';

function Header() {
  const {state, send} = useMicontexto();

  return (
    <header>
      <h1>Comidas Juan</h1>
      {!state.matches('inicio') && !state.matches('final')?
      <button className='boton1' onClick={()=>{send('CANCELAR')}}>Cancelar</button>
      :null}
    </header>
  )
}

export {Header}