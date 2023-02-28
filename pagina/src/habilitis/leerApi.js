import axios from "axios"

async function leerDatos(dir){
    try {
        const datos = await axios(dir);
        return datos.data;
    } catch (error) {
        console.log('Error al leer sopas');
        return [];
    }
}

export{leerDatos}