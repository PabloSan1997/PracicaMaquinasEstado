import axios from "axios";

async function mandarDatos(sopa, comida, cliente){
    try {
        const datos = await axios.post('http://localhost:4000/pedidos',{
            sopa, comida, cliente
        });
        return 'Se mando todo';
    } catch (error) {
        console.log('problema al mandar datos');
    }
}
export{mandarDatos}
