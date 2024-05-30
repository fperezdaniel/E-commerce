import { formAbonarConDebito } from "./formAbonarConDebito.js";
import { miCarrito } from "./agregarAlCarrito.js";
import { formAbonarConCredito } from "./formAbonarConCredito.js";

export const metodosDePago = () => {
    console.log("finalizarCompra");
    if (miCarrito.length >= 1) {
        /* const seccionCentralMain = document.getElementById("seccion-central-main");
        seccionCentralMain.innerHTML = ``; */
        const containerSectionProd = document.getElementById("container-seccion-prod");
        containerSectionProd.innerHTML = ``;
        const formFinalizarCompra = document.createElement("form");
        formFinalizarCompra.setAttribute("class", "class-form-finalizar-compra");
        formFinalizarCompra.innerHTML = `
                                        <div class= "class-container-metodos-de-pago">
                                            <h5 class="class-titulo-forma-de-pagos">¿Como quieres pagar?</h5>
                                            <p class="class-option-pago">Debito</p>
                                            <input type="checkbox" id ="input-debito" placeholder="Debito">
                                            <p class="class-option-pago">Credito</p>
                                            <input type="checkbox" id="input-credito" placeholder="Credito">
                                        </div>`;
        containerSectionProd.appendChild(formFinalizarCompra);
        const inputDebito = document.getElementById("input-debito");
        inputDebito.addEventListener("click", formAbonarConDebito);
        const inputCredito = document.getElementById("input-credito");
        inputCredito.addEventListener("click", formAbonarConCredito);
    } else {
        alert("Su carrito esta vacio");
    }

}

