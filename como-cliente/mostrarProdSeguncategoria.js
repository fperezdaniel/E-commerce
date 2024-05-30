import { agregarAlCarrito } from "./agregarAlCarrito.js"
import { obtenerProd } from "../como-admin/cargaProd.js";
import { carousel } from "./carouselPaginaPrincipal.js";
import { mostrarCarrito } from "./agregarAlCarrito.js";
import { footer } from "./footer.js";




import { finalizarCompraConDebito } from "./finalizarCompraConDebito.js";






export const mostrarProductosSegunCategoria = (e) => {
    e.preventDefault();

    obtenerProd().then(data => {
        const containerSectionProd = document.getElementById("container-seccion-prod");
        containerSectionProd.innerHTML = ``;
        const eventCategoria = e.target.id;
        console.log(eventCategoria);
        console.log("hola");

        const categoriaFiltrada = data.filter((el) => el.categoria === eventCategoria);
        console.log(categoriaFiltrada, "linea 14");


        const containerCardLinksCategorias = document.createElement("div");
        containerCardLinksCategorias.setAttribute("class", "class-container-card-links-categorias")
        containerSectionProd.appendChild(containerCardLinksCategorias);
        categoriaFiltrada.forEach((el) => {
            const cardLinksCategoria = document.createElement("div");
            cardLinksCategoria.setAttribute("class", "class-card-links-categoria");
            cardLinksCategoria.innerHTML = `
                                            <div class="class-container-detalles-prod">
                                                <img class="class-img-producto" src="${el.img}" alt="${el.nombre}">
                                                <p class="items-card-links-categoria">Categoria: ${el.categoria}</p>
                                                <p class="items-card-links-categoria">${el.nombre}</p>
                                                <p class="items-card-links-categoria">${el.marca}</p>
                                                <p class="class-precio-prod">$${el.precio}</p>
                                                <button id="${el.id}" class="class-btn-agregar">Agregar</button>
                                            </div>
                                            <div class="class-div-btn-agregar-cancelar">
                                                
                                            </div>`;
            containerCardLinksCategorias.appendChild(cardLinksCategoria);
        });
        const botonesAgregar = document.getElementsByClassName("class-btn-agregar");
        console.log(botonesAgregar, " botonesAgregar linea 32");
        for (const agregar of botonesAgregar) {
            agregar.addEventListener("click", agregarAlCarrito);
        }
    });
}

