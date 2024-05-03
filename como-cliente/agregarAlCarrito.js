import { obtenerProd } from "../como-admin/cargaProd.js";
import { metodosDePago } from "./metodosDePago.js";


export let miCarrito = JSON.parse(localStorage.getItem("productoEnCarrito")) || [];
console.log(miCarrito, " mi carrito");

export const vaciarCarrito = () => {
    const containerProdEnCarrito = document.getElementById("container-prod-en-carrito");
    containerProdEnCarrito.classList.replace("class-container-prod-en-carrito", "oculto");
    containerProdEnCarrito.innerHTML = ``;
    miCarrito.length = 0
    localStorage.setItem("productoEnCarrito", JSON.stringify(miCarrito));
}

export const mostrarCarrito = () => {
    if(miCarrito.length >= 1){
        
        const containerProdEnCarrito = document.getElementById("container-prod-en-carrito");
        containerProdEnCarrito.innerHTML = ``;
        
        const tituloCarrito = document.createElement("h5");
        tituloCarrito.setAttribute("class", "class-titulo-carrito");
        tituloCarrito.innerText = `Tu carrito`;
        containerProdEnCarrito.appendChild(tituloCarrito);
        const imgCarrito = document.createElement("img");
        imgCarrito.setAttribute("src", "./img/carrito.jpg");
        imgCarrito.setAttribute("class", "class-img-carrito");
        containerProdEnCarrito.appendChild(imgCarrito);
        const btnVaciarCarrito = document.createElement("button");
        btnVaciarCarrito.setAttribute("class", "class-btn-vaciar-carrito");
        btnVaciarCarrito.innerText = `Vaciar carrito`;
        btnVaciarCarrito.addEventListener("click", vaciarCarrito);
        containerProdEnCarrito.appendChild(btnVaciarCarrito);
        miCarrito.forEach((el) => {
            const cardProdEnCarrito = document.createElement("div");
            cardProdEnCarrito.setAttribute("class", "card-prod-en-carrito");
            cardProdEnCarrito.innerHTML = `
                                        <div class="class-container-card-carrito">
                                            <p>Categoria: ${el.categoria}</p>
                                            <div class="class-container-nombre-prod">
                                                <p>${el.nombre}</p>
                                            </div>
                                            <p>${el.marca}</p>
                                            <p>Precio x unidad:$ ${el.precio}</p>
                                            <p>${el.cantidad}</p>
                                            <p>$ ${el.precio * el.cantidad}</p>
                                            <button  id="${el.id}" class= "class-btn-eliminar-prod">Eliminar producto</button>
                                        </div>`;
            containerProdEnCarrito.appendChild(cardProdEnCarrito);
        });
        const totalCarrito = miCarrito.reduce((acc, el) => acc += el.precio * el.cantidad, 0);
        const contenedorTotalCarrito = document.createElement("div");
        contenedorTotalCarrito.setAttribute("class", "class-contenedor-total-carrito")
        contenedorTotalCarrito.innerText = `Total de compra: $${totalCarrito}`;
        containerProdEnCarrito.appendChild(contenedorTotalCarrito);
        const btnEliminarProd = document.getElementsByClassName("class-btn-eliminar-prod");
        for (const btn of btnEliminarProd) {
            btn.addEventListener("click", eliminarProd);
        }
        const btnFinalizarCompra = document.createElement("button");
        btnFinalizarCompra.setAttribute("class", "class-btn-finalizar-compra");
        btnFinalizarCompra.innerText = `Pagar`;
        btnFinalizarCompra.addEventListener("click", metodosDePago);
        containerProdEnCarrito.appendChild(btnFinalizarCompra);
    }else{
        const containerProdEnCarrito = document.getElementById("container-prod-en-carrito");
        containerProdEnCarrito.classList.replace("class-container-prod-en-carrito", "oculto");
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
        const containerProdEncarrito = document.getElementById("container-prod-en-carrito");
        containerProdEncarrito.classList.replace("oculto", "class-container-prod-en-carrito");
        
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






/* TENES QUE VER DE RESOLVER
QUE SI ELIMINAS UN PRODUCTO QUE NO VUELVA APARECER EN EL CARRITO */





