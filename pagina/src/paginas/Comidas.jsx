import React from 'react'
import { Navigate } from 'react-router-dom';
import { useMicontexto } from '../contexto/contexto';

function Comidas() {
  const [valor, setValor]=React.useState('');
  const {state, send} = useMicontexto();
  const siguiente = ()=>{
    send('SIGUIENTE', {nuevaComida:valor});
  }
  const opciones = state.context.listaComida;
  if(state.matches('comidas')){
    return (
      <>
      <h2>Escoja una comida :V</h2>
      <div className="conenedor comidas">
        <select name="" id="ver" value={valor} onChange={(e)=>{setValor(e.target.value)}}>
          <option value='' className="opcion" disabled defaultValue>Seleccione la comida</option>
          {opciones.map(elemento=>(
            <option value={elemento} key={elemento}>{elemento}</option>
          ))}
        </select>
        <button className='boton' onClick={siguiente}>Siguiente</button>
      </div>
      </>
    )
  }else{
    return <Navigate to="/nombre"/>
  }
}

export {Comidas}