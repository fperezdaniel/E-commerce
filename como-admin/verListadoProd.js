import { objetoDeposito } from "./cargaProd.js"
import Deposito from "./classDeposito.js";


/** Ver listado prod */
export const verListadoProducto = () => {
    console.log("funcion verListadoProd");
    objetoDeposito.renderizarProd(objetoDeposito.deposito)
} 
