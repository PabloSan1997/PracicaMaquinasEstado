import { createMachine, assign } from "xstate";

const comidaMachine = createMachine({
  id: "Maquina menu",
  predictableActionArguments: true,
  initial: "inicio",
  states: {
    inicio: {
      on: {
        SI: {
          target: "sopas",
        },
      },
    },
    sopas: {
      on: {
        CANCELAR: {
          target: "inicio",
        },
        SIGUIENTE:{
          target:"comidas"
        }
      },
    },
    comidas: {
      on: {
        CANCELAR: {
          target: "inicio",
        },
        SIGUIENTE:{
          target:"nombre"
        }
      },
    },
    nombre: {
      on: {
        CANCELAR: {
          target: "inicio",
        },
        SIGUIENTE:{
          target:"final"
        }
      },
    },
    final: {
      after:{
        10000:{
          target:"inicio"
        }
      },
      on:{
        ACEPTAR:{
          target:"inicio"
        }
      }
    },
  },
});
export{comidaMachine}