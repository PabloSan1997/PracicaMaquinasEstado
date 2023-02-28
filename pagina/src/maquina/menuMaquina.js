import { createMachine, assign } from "xstate";

const comidaMachine = createMachine(
  {
    id: "Maquina menu",
    predictableActionArguments: true,
    initial: "inicio",
    context: {
      sopaSelecionada: "",
      comidaSelecionada: "",
      nombreEscrito: "",
      listaSopa:["sopa1", "sopa2", "sopa3", "sopa4"],
      listaComida:['Lasagna', "Pizza", "Pozole", "Tacos"]
    },
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
          SIGUIENTE: {
            cond:"condicionSopa",
            target: "comidas",
            actions: assign(
              (context, event) => (context.sopaSelecionada = event.nuevaSopa)
            ),
          },
        },
      },
      comidas: {
        on: {
          CANCELAR: {
            target: "inicio",
          },
          SIGUIENTE: {
            cond:"condicionComida",
            target: "nombre",
            actions: assign(
              (context, event) =>
                (context.comidaSelecionada = event.nuevaComida)
            ),
          },
        },
      },
      nombre: {
        on: {
          CANCELAR: {
            target: "inicio",
          },
          SIGUIENTE: {
            cond: "condicionNombre",
            target: "final",
            actions: assign(
              (context, event) => (context.nombreEscrito = event.nuevaNombre)
            ),
          },
        },
      },
      final: {
        after: {
          10000: {
            target: "inicio",
            actions: assign((context, event) => {
              context.sopaSelecionada = "";
              context.comidaSelecionada = "";
              context.nombreEscrito = "";
            }),
          },
        },
        on: {
          ACEPTAR: {
            target: "inicio",
          },
        },
      },
    },
  },
  {
    guards: {
      condicionNombre: (context, event)=>{
        return event.nuevaNombre!=='';
      },
      condicionSopa: (context, event)=>{
        return event.nuevaSopa!=='';
      },
      condicionComida: (context, event)=>{
        return event.nuevaComida!=='';
      },
    },
  }
);
export { comidaMachine };
