import React from 'react'
import { Navigate } from 'react-router-dom';
import { useMicontexto } from '../contexto/contexto'

function Inicio() {
    const {state, send} = useMicontexto();
    const seguir = () =>{
        send('SI');
    }
    if(state.matches("inicio")){
        return (
            <>
            <h2 className='titulo1'>Bienvenido a nuestro restaurante</h2>
            <p>En este restaurante encontrará todo tipo de platillos y comidas para usted y su familia</p>
            <div className="contenedor contenedro-inicio">
                <h2 className='titulo2'>
                    ¿Desea Pedir algo?
                </h2>
                <button className='boton' onClick={seguir}>Si</button>
            </div>
            </>
          )
    }else{
        return (
            <Navigate to='/sopas'/>
        );
    }
}

export {Inicio}