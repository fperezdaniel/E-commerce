import { objetoDeposito } from "./cargaProd.js";
/** BUSCAR PRODUCTO */
const buscarProducto = (e)=>{
    e.preventDefault();
    const formBuscarProd = e.target;
    const inputBuscarProd = formBuscarProd["input-buscar-prod"].value.toLowerCase();
    console.log(inputBuscarProd);
    if(inputBuscarProd === "" || inputBuscarProd === undefined){
        alert("Debe completar el campo");
        
    }else{
        const productoEncontrado = objetoDeposito.buscarProd(inputBuscarProd);
        console.log(productoEncontrado);
        productoEncontrado? objetoDeposito.renderizarProdEncontrado(productoEncontrado): alert("El producto no se encuentra cargado")
    }
}
/** FORMULARIO BUSCAR PRODUCTO */
export const crearFormBuscarProd = () => {
    console.log("buscarProd");
    const mainAdmin = document.getElementById("main-admin");
    mainAdmin.innerHTML = ``;
    const containerBuscarProd = document.createElement("div");
    containerBuscarProd.setAttribute("class", "container-buscar-prod");
    containerBuscarProd.innerHTML = `
                                    <form id="form-buscar-prod" class="class-form-buscar-prod">
                                        <h5 class="class-titulo-buscar-prod">Ingrese nombre del producto</h5>
                                        <input class="class-input-buscar-prod" name="input-buscar-prod" type="text" placeholder="Nombre">
                                        <button class="class-btn-buscar-prod">Buscar</button>
                                    </form>`;
    mainAdmin.appendChild(containerBuscarProd);
    const formBuscarProd = document.getElementById("form-buscar-prod");
    formBuscarProd.addEventListener("submit", buscarProducto)
}