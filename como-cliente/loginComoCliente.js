import { baseDeDatosCliente } from "./baseDeDatosCliente.js";
import { capturarHeader } from "./paginaPrincipalComoCliente.js";
import { objetoBaseDeDatos } from "../crearCuenta/crearCuentaNuevoCliente.js";
import { validarContrasena } from "./corroborarContrasena.js";
import { carousel } from "./carouselPaginaPrincipal.js";
import { mostrarCarrito } from "./agregarAlCarrito.js";
import { footer } from "./footer.js";
/** VALIDANDO DATOS EN LOCALSTORAGE */
export const validandoDatosEnLocalStorage = () => {
    const containerBtn = document.getElementById("container-botones");
    const sectionInicioPrincipal = document.getElementById("section-inicio-principal");
    const formLoginCliente = document.getElementById("form-login-cliente");
    const btnCliente = document.getElementById("btn-cliente");
    const btnAdmin = document.getElementById("btn-admin");
    const containerSectionProdEnCarrito = document.getElementById("container-section-prod-en-carrito");
    const datosEnLocalStorage = JSON.parse(localStorage.getItem("clienteValido"));
    console.log(datosEnLocalStorage, "datosEnLocalStorage linea 14");
    if (datosEnLocalStorage) {
        sectionInicioPrincipal.innerHTML = ``;
        containerBtn.classList.add("oculto");
        btnCliente.classList.add("oculto");
        btnAdmin.classList.add("oculto");
        sectionInicioPrincipal.classList.add("oculto");
        formLoginCliente.classList.add("oculto");
        containerSectionProdEnCarrito.classList.replace("oculto", "class-container-section-prod-en-carrito");
        capturarHeader(datosEnLocalStorage);
        mostrarCarrito();
        carousel();
        footer()
    }
}


/** LOGIN CLIENTE */
export const loginCliente = (e) => {
    e.preventDefault();
    console.log("loginCliente");
    const eventFormCliente = e.target;
    console.log(eventFormCliente)
    const inputUsuarioCliente = eventFormCliente["input-usuario-cliente"].value;
    console.log(inputUsuarioCliente);
    const inputContrasenaCliente = eventFormCliente["input-contrasena-cliente"].value;
    console.log(inputContrasenaCliente);
    if (inputUsuarioCliente !== "" && inputContrasenaCliente !== "") {
        const validandoCliente = objetoBaseDeDatos.buscarUsuario(inputUsuarioCliente);
        if (validandoCliente) {
            validandoCliente.pass === inputContrasenaCliente ? validarContrasena(validandoCliente) : alert("Contraseña invalida");
        } else {
            alert("Debe cargar sus datos como nuevo usuario, ir a CREAR MI CUENTA");
            const formLoginCliente = document.getElementById("form-login-cliente");
            formLoginCliente.classList.replace("class-form-login-cliente", "oculto");
            const tituloInicioPrincipal = document.getElementById("titulo-inicio-principal");
            tituloInicioPrincipal.classList.replace("oculto", "titulo-inicio-principal");
            const btnAdmin = document.getElementById("btn-admin");
            btnAdmin.classList.replace("oculto", "estilos-btn-admin");
            const btnCliente = document.getElementById("btn-cliente");
            btnCliente.classList.replace("oculto", "estilos-btn-cliente");
            const btnCrearCuenta = document.getElementById("btn-crear-cuenta");
        btnCrearCuenta.classList.replace("oculto", "class-btn-crear-cuenta-cliente");
        }
    } else {
        alert("Debe completar los campos");
    }
}





/** MOSTRAR LOGIN CLIENTE */
export const mostrarLoginCliente = () => {
    console.log("capturaBtnCliente");
    const tituloPaginaPrincipal = document.getElementById("titulo-inicio-principal");
    const containerBtn = document.getElementById("container-botones");
    const btnCliente = document.getElementById("btn-cliente");
    const btnCrearCuenta = document.getElementById("btn-crear-cuenta");
    const btnAdmin = document.getElementById("btn-admin");
    const formLoginCliente = document.getElementById("form-login-cliente");
    containerBtn.classList.add("oculto");
    btnCliente.classList.add("oculto");
    btnCrearCuenta.classList.add("oculto");
    btnAdmin.classList.add("oculto");
    tituloPaginaPrincipal.classList.add("oculto");
    formLoginCliente.classList.replace("oculto", "class-form-login-cliente");
    formLoginCliente.addEventListener("submit", loginCliente);
}

/** CAPTURAR BTN CLIENTE */
export const capturarBtnCliente = () => {
    const btnCliente = document.getElementById("btn-cliente");
    btnCliente.addEventListener("click", mostrarLoginCliente);

}