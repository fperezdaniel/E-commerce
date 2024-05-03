import { validarInputsPagoConTarjeta } from "./validarInputsPagoConTarjeta.js";
import { carousel } from "./carouselPaginaPrincipal.js";
import { vaciarCarrito } from "./agregarAlCarrito.js";

export const finalizarCompraConDebito = (e) => {
    e.preventDefault();
    console.log("finalizarCompraConDebito");
    const formAbonarConDebito = e.target;
    console.log("formAbonarConDebito ", formAbonarConDebito);
    const inputNumeroDeTarjeta = parseInt(formAbonarConDebito["input-numero-de-tarjeta"].value);
    console.log(inputNumeroDeTarjeta);
    const inputNombreApellidoTarjeta = formAbonarConDebito["nombreApellido"].value.toLowerCase();
    console.log(inputNombreApellidoTarjeta);
    const inputCaducidadMes = parseInt(formAbonarConDebito["input-caducidad-mes"].value);
    console.log(inputCaducidadMes);
    const inputCaducidadAno = parseInt(formAbonarConDebito["input-caducidad-ano"].value);
    console.log(inputCaducidadAno);
    const inputCodigoDeSeguridad = parseInt(formAbonarConDebito["input-codigo-de-seguridad"].value);
    console.log(inputCodigoDeSeguridad);
    const inputsValidadosPagoConDebito = validarInputsPagoConTarjeta(inputNumeroDeTarjeta, inputNombreApellidoTarjeta, inputCaducidadMes, inputCaducidadAno, inputCodigoDeSeguridad);
    if (inputsValidadosPagoConDebito) {
        alert("El pago se efectuo con exito, muchas gracias por su compra");
        const seccionCentralMain = document.getElementById("seccion-central-main");
        seccionCentralMain.innerHTML = ``;
        carousel();
        vaciarCarrito();
    } else {
        alert("Complete todos los campos por favor");
    }
}

