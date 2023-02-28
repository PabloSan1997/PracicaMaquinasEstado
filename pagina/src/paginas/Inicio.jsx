import React from 'react'
import { Navigate } from 'react-router-dom';
import { useMicontexto } from '../contexto/contexto'
import "../estilos/inicio.css";

function Inicio() {
    const {state, send} = useMicontexto();
    const seguir = () =>{
        send('SI');
    }
    if(state.matches("inicio")){
        return (
            <>
            <h2 className='titulo1'>Bienvenido a nuestro restaurante</h2>
            <p className='texto1'>En este restaurante encontrará las mejores sopas y comidas que haya probado en este pais</p>
            <div className="contenedro-inicio">
                <h2 className='titulo2'>
                    ¿Ya esta listo para ordenar?
                </h2>
                <button className='boton' onClick={seguir}>Aceptar</button>
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