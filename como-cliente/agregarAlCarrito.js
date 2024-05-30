import { obtenerProd } from "../como-admin/cargaProd.js";
import { metodosDePago } from "./metodosDePago.js";


export const vaciarCarrito = () => {
    console.log("vaciarCarrito");
    miCarrito.length = 0;
    localStorage.setItem("productoEnCarrito", JSON.stringify(miCarrito));
    mostrarCarrito();
}






export let miCarrito = JSON.parse(localStorage.getItem("productoEnCarrito")) || [];
console.log(miCarrito, " mi carrito");
export const mostrarCarrito = () => {
    
    const containerSectionProdEnCarrito = document.getElementById("container-section-prod-en-carrito");
    containerSectionProdEnCarrito.innerHTML = ``;
    const containerProdEnCarrito = document.createElement("div");
    containerProdEnCarrito.setAttribute("class", "class-container-prod-en-carrito");
    containerSectionProdEnCarrito.appendChild(containerProdEnCarrito);

    const tituloCarrito = document.createElement("h5");
    tituloCarrito.setAttribute("class", "class-titulo-carrito");
    tituloCarrito.innerText = `Tu carrito`;
    containerProdEnCarrito.appendChild(tituloCarrito);


    const imgCarrito = document.createElement("img");
    imgCarrito.setAttribute("src", "./img/carrito.jpg");
    imgCarrito.setAttribute("class", "class-img-carrito");
    containerProdEnCarrito.appendChild(imgCarrito);

    if (miCarrito.length >= 1) {
        miCarrito.forEach((el) => {
            const cardProdEnCarrito = document.createElement("div");
            cardProdEnCarrito.setAttribute("class", "class-card-prod-en-carrito");
            cardProdEnCarrito.innerHTML = `
                                            <div class="class-container-card-carrito">
                                                <p class="class-item-prod-en-carrito">Categoria: ${el.categoria}</p>
                                                <p class="class-item-prod-en-carrito">${el.nombre}</p>
                                                <p class="class-item-prod-en-carrito">${el.marca}</p>
                                                <p class="class-item-prod-en-carrito">Precio x unidad: $ ${el.precio}</p>
                                                <p class="class-item-prod-en-carrito">${el.cantidad}</p>
                                                <p class="class-item-prod-en-carrito">$ ${el.precio * el.cantidad}</p>
                                                <button  id="${el.id}" class= "class-btn-eliminar-prod">Eliminar producto</button>
                                            </div>`;
            containerProdEnCarrito.appendChild(cardProdEnCarrito);
        });
        containerSectionProdEnCarrito.scrollIntoView({ behavior: 'smooth' });
        const btnVaciarCarrito = document.createElement("button");
        btnVaciarCarrito.setAttribute("class", "class-btn-vaciar-carrito");
        btnVaciarCarrito.innerText = `Vaciar carrito`;
        btnVaciarCarrito.addEventListener("click", vaciarCarrito);
        containerProdEnCarrito.appendChild(btnVaciarCarrito);
        const btnEliminarProd = document.getElementsByClassName("class-btn-eliminar-prod");
        for (const btn of btnEliminarProd) {
            btn.addEventListener("click", eliminarProd);
        }
        const btnFinalizarCompra = document.createElement("button");
        btnFinalizarCompra.setAttribute("class", "class-btn-finalizar-compra");
        btnFinalizarCompra.innerText = "Finalizar compra"
        containerProdEnCarrito.appendChild(btnFinalizarCompra);
        btnFinalizarCompra.addEventListener("click", metodosDePago);
    } else {
        containerProdEnCarrito.innerHTML = ``;
        containerProdEnCarrito.appendChild(tituloCarrito);
        const mensajeCarritoVacio = document.createElement("p");
        mensajeCarritoVacio.setAttribute("class", "class-mensaje-carrito-vacio");
        mensajeCarritoVacio.innerText = ` Su carrito esta vacio `;
        containerProdEnCarrito.appendChild(mensajeCarritoVacio);
    }
}

function eliminarProd(e) {
    console.log("eliminarProd");
    const eventoBtn = parseInt(e.target.value);
    console.log(eventoBtn);
    const buscarProdPorIndice = miCarrito.findIndex((el) => el.id === eventoBtn);
    console.log(buscarProdPorIndice, "linea 35");
    miCarrito.splice(buscarProdPorIndice, 1);
    console.log(miCarrito, "linea 77 miCarrito");
    localStorage.setItem("productoEnCarrito", JSON.stringify(miCarrito));
    mostrarCarrito();
}
/** agregar carrito 1 */
export const agregarAlCarrito = (e) => {
        obtenerProd().then(data => {
            const idProd = parseInt(e.target.id);

        console.log(idProd, " esto es el indice");
        const prodSeleccionado = data.find((el) => el.id === idProd);
        console.log(prodSeleccionado, " prodSeleccionado");
        
        const existenciaProdEnCarrito = miCarrito.find((el) => el.codigo === prodSeleccionado.codigo);
        console.log(existenciaProdEnCarrito, " exitenciaProdEnCarrito linea 64");
        if (existenciaProdEnCarrito) {
            existenciaProdEnCarrito.cantidad++;
            localStorage.setItem("productoEnCarrito", JSON.stringify(miCarrito));
            mostrarCarrito();
        } else {
            prodSeleccionado.cantidad = 1;
            miCarrito.push(prodSeleccionado);
            console.log(miCarrito, "linea 72");
            localStorage.setItem("productoEnCarrito", JSON.stringify(miCarrito));
            mostrarCarrito();
        }
    })
}