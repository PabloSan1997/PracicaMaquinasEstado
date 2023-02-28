import { createMachine, assign } from "xstate";
import { leerDatos } from "../habilitis/leerApi";
import { mandarDatos } from "../habilitis/mandarApi";


const fillSopas = {
  id: "partesopas",
  initial:"loading",
  states: {
    loading: {
      invoke: {
        id: "leerDatos",
        src: () => leerDatos('http://localhost:4000/sopas/'),
        onDone: {
          target: "success",
          actions: assign({
            listaSopa: (context, event) => event.data,
          }),
        },
        onError: {
          target: "failure",
          actions: assign({
            error: "Fallo el request",
          }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
};
const fillComida = {
  id:"Leer comida",
  initial:"loading",
  states:{
    loading:{
      invoke:{
        id:"leer datos",
        src:()=>leerDatos('http://localhost:4000/comidas/'),
        onDone:{
          target:"succes",
          actions:assign({listaComida:(context, event)=>event.data})
        },
        onError:{
          target: "failure",
          actions: assign({
            error: "Fallo el request",
          }),
        }
      }
    },
    succes:{},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  }
}
const comidaMachine = createMachine(
  {
    id: "Maquina menu",
    predictableActionArguments: true,
    initial: "inicio",
    context: {
      sopaSelecionada: "",
      comidaSelecionada: "",
      nombreEscrito: "",
      listaComida: [],
      listaSopa:[]
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
            cond: "condicionSopa",
            target: "comidas",
            actions: assign(
              (context, event) => (context.sopaSelecionada = event.nuevaSopa)
            ),
          },
        },
        ...fillSopas
      },
      comidas: {
        on: {
          CANCELAR: {
            target: "inicio",
          },
          SIGUIENTE: {
            cond: "condicionComida",
            target: "nombre",
            actions: assign(
              (context, event) =>
                (context.comidaSelecionada = event.nuevaComida)
            ),
          },
        },
        ...fillComida,
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
        // after: {
        //   5000: {
        //     target: "inicio",
        //     actions: assign((context, event) => {
        //       mandarDatos(context.sopaSelecionada, context.comidaSelecionada, context.nombreEscrito);
        //       context.sopaSelecionada = "";
        //       context.comidaSelecionada = "";
        //       context.nombreEscrito = "";
        //     }),
        //   },
        // },
        on: {
          ACEPTAR: {
            target: "inicio",
            actions:assign((context,event)=>mandarDatos(context.sopaSelecionada, context.comidaSelecionada, context.nombreEscrito))
          },
        },
      },
    },
  },
  {
    guards: {
      condicionNombre: (context, event) => {
        return event.nuevaNombre !== "";
      },
      condicionSopa: (context, event) => {
        return event.nuevaSopa !== "";
      },
      condicionComida: (context, event) => {
        return event.nuevaComida !== "";
      },
    },
  }
);
export { comidaMachine };
