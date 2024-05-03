import { capturarHeader } from "./paginaPrincipalComoCliente.js";
import { carousel } from "./carouselPaginaPrincipal.js";
import { footer } from "./footer.js";
import { mostrarCarrito } from "./agregarAlCarrito.js";

export const validarContrasena = (validandoCliente) => {
    const containerBtn = document.getElementById("container-botones");
    const btnCliente = document.getElementById("btn-cliente");
    const formLoginCliente = document.getElementById("form-login-cliente");
    const sectionInicioPrincipal = document.getElementById("section-inicio-principal");
    sectionInicioPrincipal.innerHTML = ``;
    containerBtn.classList.add("oculto");
    btnCliente.classList.add("oculto");
    sectionInicioPrincipal.classList.add("oculto");
    formLoginCliente.classList.add("oculto");
    localStorage.setItem("clienteValido", JSON.stringify(validandoCliente));
    capturarHeader(validandoCliente);
    carousel();
    mostrarCarrito();
    footer()
}
