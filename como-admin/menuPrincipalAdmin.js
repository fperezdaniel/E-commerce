import { crearFormCargaProd } from "./cargaProd.js";
import { crearFromFiltradoPorCategoria } from "./filtradorPorCategoria.js";
import { crearFormBuscarProd } from "./buscarProd.js";
import { verListadoProducto } from "./verListadoProd.js";
import { despejarPantalla } from "./despejarPantalla.js";







export const crearMenuprincipal = () => {
    const menuPrincipalAdmin = document.getElementById("menu-principal-admin");
    const sectionMenuPrincipalAdmin = document.createElement("div");
    sectionMenuPrincipalAdmin.setAttribute("class", "section-menu-principal-admin");
    sectionMenuPrincipalAdmin.innerHTML = `
                                            <h5 class= "titulo-menu-admin">Bienvenido al menu administrador</h5>
                                            <div class= "div-btn-containers">
                                            <button class ="botones-menu-admin" id="btn-carga-prod">Carga producto</button>
                                            <button class ="botones-menu-admin" id="btn-filtrar-prod">Filtrar por categoria</button>
                                            <button class ="botones-menu-admin" id="btn-buscar-prod">Buscar producto</button>
                                            <button class ="botones-menu-admin" id="btn-ver-listado-prod">Ver listado producto</button>
                                            <button class ="botones-menu-admin" id="btn-despejar-listado">Despejar pantalla</button>
                                            </div>`;

    menuPrincipalAdmin.appendChild(sectionMenuPrincipalAdmin);
    const btnCargaprod = document.getElementById("btn-carga-prod");
    btnCargaprod.addEventListener("click", crearFormCargaProd);
    const btnFiltrarProd = document.getElementById("btn-filtrar-prod");
    btnFiltrarProd.addEventListener("click", crearFromFiltradoPorCategoria);
    const btnBuscarProd = document.getElementById("btn-buscar-prod");
    btnBuscarProd.addEventListener("click", crearFormBuscarProd);
    const btnVerListado = document.getElementById("btn-ver-listado-prod");
    btnVerListado.addEventListener("click", verListadoProducto);
    const btnDespejarPantalla = document.getElementById("btn-despejar-listado");
    btnDespejarPantalla.addEventListener("click", despejarPantalla);
}



