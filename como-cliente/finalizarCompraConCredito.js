import { validarInputsPagoConTarjeta } from "./validarInputsPagoConTarjeta.js";
import { carousel } from "./carouselPaginaPrincipal.js";
import { vaciarCarrito } from "./agregarAlCarrito.js";


export const finalizarCompraConCredito = (e) => {
    e.preventDefault();
    console.log("fializarCompraConCredito");
    const formAbonarConCredito = e.target;
    console.log(formAbonarConCredito);
    const inputNumTarjCredito = parseInt(formAbonarConCredito["input-numero-de-tarjeta-credito"].value);
    console.log(inputNumTarjCredito);
    const inputNomApellidoConCredito = formAbonarConCredito["nombre-apellido-credito"].value.toLowerCase();
    console.log(inputNomApellidoConCredito);
    const inputCaducidadMesConCredito = parseInt(formAbonarConCredito["input-caducidad-mes-credito"].value);
    console.log(inputCaducidadMesConCredito);
    const inputCaducidadAnoConCredito = parseInt(formAbonarConCredito["input-caducidad-ano-credito"].value);
    console.log(inputCaducidadAnoConCredito);
    const inputcodigoConCredito = parseInt(formAbonarConCredito["input-codigo-de-seguridad-credito"].value);
    console.log(inputcodigoConCredito);
    const inputsvalidadosPagoConCredito =  validarInputsPagoConTarjeta(inputNumTarjCredito, inputNomApellidoConCredito, inputCaducidadMesConCredito, inputCaducidadAnoConCredito, inputcodigoConCredito);
    console.log(inputsvalidadosPagoConCredito, "inputsvalidadosPagoConCredito");
    if (inputsvalidadosPagoConCredito) {
        alert ("El pago se efectuo con exito, muchas gracias por su compra");
        const seccionCentralMain = document.getElementById("seccion-central-main");
        seccionCentralMain.innerHTML = ``;
        carousel();
        vaciarCarrito();
    }else{
        alert("Complete todos los campos por favor");
    }
}