import { capturarHeader } from "./paginaPrincipalComoCliente.js";
import { carousel } from "./carouselPaginaPrincipal.js";

import { footer } from "./footer.js";

export const validarContrasena = (validandoCliente) => {
    const containerBtn = document.getElementById("container-botones");
    const btnCliente = document.getElementById("btn-cliente");
    const btnAdmin = document.getElementById("btn-admin");
    const formLoginCliente = document.getElementById("form-login-cliente");
    const sectionInicioPrincipal = document.getElementById("section-inicio-principal");
    const containerSectionProdEnCarrito = document.getElementById("container-section-prod-en-carrito");
    sectionInicioPrincipal.innerHTML = ``;
    containerSectionProdEnCarrito.classList.replace("oculto", "class-container-section-prod-en-carrito");
    containerBtn.classList.add("oculto");
    btnCliente.classList.add("oculto");
    btnAdmin.classList.add("oculto");
    sectionInicioPrincipal.classList.add("oculto");
    formLoginCliente.classList.add("oculto");
    localStorage.setItem("clienteValido", JSON.stringify(validandoCliente));
    capturarHeader(validandoCliente);
    carousel();
    footer();
}
