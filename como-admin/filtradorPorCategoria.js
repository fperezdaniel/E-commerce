import { objetoDeposito } from "./cargaProd.js";


/** FILTRADO PRODUCTO */

const filtrarProducto = (e) => {
    e.preventDefault();
    console.log("filtrado");
    const formFiltradoProd = e.target;
    const inputFiltradoProd = formFiltradoProd["input-filtrado-prod"].value.toLowerCase();
    console.log(inputFiltradoProd);
    if (inputFiltradoProd !== "") {
        const prodFiltradoPorCategoria = objetoDeposito.filtrarProd(inputFiltradoProd);
        console.log(prodFiltradoPorCategoria);
        objetoDeposito.renderizarProd(prodFiltradoPorCategoria);
    } else {
        alert("Debe completar el campo");
    }
}



/** FORMULARIO FILTRADO PRODUCTO */
export const crearFromFiltradoPorCategoria = () => {
    const mainAdmin = document.getElementById("main-admin");
    mainAdmin.innerHTML = ``;
    const containerFiltradoProd = document.createElement("div");
    containerFiltradoProd.setAttribute("class", "container-filtrado-prod");
    containerFiltradoProd.innerHTML = `
                                    <form class="class-form-prod-filtrado" id="form-filtrado-prod">
                                        <h5 class="titulo-filtrado-prod">Ingrese categoria</h5>
                                        <input class="class-prod-filtrado-input" name="input-filtrado-prod" type="text" placeholder="Categoria">
                                        <button class="btn-filtrar">Filtrar</button>
                                    </form>`;
    mainAdmin.appendChild(containerFiltradoProd);
    const formFiltradoProd = document.getElementById("form-filtrado-prod");
    formFiltradoProd.addEventListener("submit", filtrarProducto);
}