import React from 'react'
import { Navigate } from 'react-router-dom';
import { useMicontexto } from '../contexto/contexto';


function Final() {
    const {state, send}=useMicontexto();
    const yaesta = () =>{
        send('ACEPTAR');
    }
    const {sopaSelecionada, comidaSelecionada, nombreEscrito}=state.context;
    if(state.matches("final")){
        return (
            <>
            <h2>Yo esta todo listo</h2>
            <div className="final">
                <p className="titulo">Ya esta todo listo, aqui esta todo lo pedido :)</p>
                <Tabla 
                nombre={nombreEscrito}
                sopa={sopaSelecionada}
                comida={comidaSelecionada}
                />
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
function Tabla({nombre, sopa, comida}){
    return (
        <div className="tabla">
        <div className="fila">
            <div className="col">
                <p className="salida">Nombre</p>
            </div>
            <div className="col">
                <p className="salida salida2">{nombre}</p>
            </div>
        </div>
        <div className="fila">
            <div className="col">
                <p className="salida">Comida</p>
            </div>
            <div className="col">
                <p className="salida salida2">{comida}</p>
            </div>
        </div>
        <div className="fila">
            <div className="col">
                <p className="salida">Sopa</p>
            </div>
            <div className="col">
                <p className="salida salida2">{sopa}</p>
            </div>
        </div>
    </div>
    );
}
export {Final}