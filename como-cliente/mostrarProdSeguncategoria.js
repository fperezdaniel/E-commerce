import { agregarAlCarrito } from "./agregarAlCarrito.js"
import { obtenerProd } from "../como-admin/cargaProd.js";
import { carousel } from "./carouselPaginaPrincipal.js";
import { footer } from "./footer.js";
import { mostrarCarrito } from "./agregarAlCarrito.js";



export const mostrarProductosSegunCategoria = (e) => {
    e.preventDefault();

    obtenerProd().then(data => {
        const seccionCentralMain = document.getElementById("seccion-central-main");
        seccionCentralMain.innerHTML = ``;
        carousel();
        const eventCategoria = e.target.id;
        console.log(eventCategoria);
        console.log("hola");
        /* const containerProdEncarrito = document.getElementById("container-prod-en-carrito");
        containerProdEncarrito.classList.replace("oculto", "class-container-prod-en-carrito"); */
        const categoriaFiltrada = data.filter((el) => el.categoria === eventCategoria);
        console.log(categoriaFiltrada, "linea 14");
        categoriaFiltrada.forEach((el) => {
            const cardLinksCategoria = document.createElement("div");
            cardLinksCategoria.setAttribute("class", "class-card-links-categoria");
            cardLinksCategoria.innerHTML = `
                                            <img class="class-img-producto" src="${el.img}" alt="${el.nombre}">
                                            <div class="class-container-detalles-prod">
                                                <p>Categoria: ${el.categoria}</p>
                                                <p>${el.nombre}</p>
                                                <p>${el.marca}</p>
                                                <p class="class-precio-prod">$${el.precio}</p>
                                            </div>
                                            <div class="class-div-btn-agregar-cancelar">
                                                <button id="${el.id}" class="class-btn-agregar">Agregar</button>
                                            </div>`;
            seccionCentralMain.appendChild(cardLinksCategoria);
        });
        const botonesAgregar = document.getElementsByClassName("class-btn-agregar");
        console.log(botonesAgregar, " botonesAgregar linea 32");
        for (const agregar of botonesAgregar) {
            agregar.addEventListener("click", agregarAlCarrito);
        }
    })
    /* mostrarCarrito(); */
}

