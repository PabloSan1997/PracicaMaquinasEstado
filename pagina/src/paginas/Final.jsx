import React from 'react'
import { Navigate } from 'react-router-dom';
import { useMicontexto } from '../contexto/contexto';

function Final() {
    const {state, send}=useMicontexto();
    const yaesta = () =>{
        send('inicio');
    }
    if(state.matches("final")){
        return (
            <>
            <h2>Yo esta todo listo</h2>
            <div className="final">
                <p className="titulo">Ya esta todo listo, aqui esta todo lo pedido :)</p>
                <button className='boton' onClick={yaesta}>Aceptar</button>
            </div>
            </>
          )
    }else{
        return (
            <Navigate to='/inicio'/>
        );
    }
}

export {Final}