import React from "react";
import { useMachine } from "@xstate/react";
import { comidaMachine } from "../maquina/menuMaquina.js";

const Contexto = React.createContext();

const Provedor = ({children}) =>{
    const [state, send]=useMachine(comidaMachine);
    return (
        <Contexto.Provider
        value={
            {
                state,
                send
            }
        }
        >
            {children}
        </Contexto.Provider>
    );
}
const useMicontexto=()=>{
    const auth = React.useContext(Contexto);
    return auth;
}
export{Provedor, useMicontexto}