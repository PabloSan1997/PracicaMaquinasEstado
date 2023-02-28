import React from 'react'
import { Navigate } from 'react-router-dom';
import { useMicontexto } from '../contexto/contexto';
import "../estilos/sopas.css";
function Sopas() {
  const { state, send } = useMicontexto();
  const [mira, setMira] = React.useState('');
  const opciones = state.context.listaSopa;
  const seguir = () => {
    send('SIGUIENTE', { nuevaSopa: mira });
  }
  if (state.matches("sopas")) {
    return (
      <>
        <h2 className='titulo1'>Hora de escoger una sopa</h2>
        <div className="sopasCaja">
          <p className="opcion">Mi sopa: <span>{mira}</span></p>
          <button onClick={seguir} className="boton">Siguiente</button>
        </div>
        <div className="contenedor-sopas">
          {opciones.map(elemento => (
            <div className={mira===elemento.nombre?'caja selec':'caja'} key={elemento.id} onClick={() => setMira(elemento.nombre)}>
              <img src={elemento.imagen} alt="" className="imagen" />
              <p className="texto">{elemento.nombre}</p>
            </div>
          ))}
        </div>
      </>
    )
  } else {
    return (
      <Navigate to='/comidas' />
    );
  }
}

export { Sopas }