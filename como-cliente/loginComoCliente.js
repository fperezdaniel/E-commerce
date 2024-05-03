import { baseDeDatosCliente } from "./baseDeDatosCliente.js";
import { capturarHeader } from "./paginaPrincipalComoCliente.js";
import { objetoBaseDeDatos } from "../crearCuenta/crearCuentaNuevoCliente.js";
import { validarContrasena } from "./corroborarContrasena.js";
import { carousel } from "./carouselPaginaPrincipal.js";
import { footer } from "./footer.js"; 
import { mostrarCarrito } from "./agregarAlCarrito.js";
/** VALIDANDO DATOS EN LOCALSTORAGE */
export const validandoDatosEnLocalStorage = () => {
    const containerBtn = document.getElementById("container-botones");
    const sectionInicioPrincipal = document.getElementById("section-inicio-principal");
    const formLoginCliente = document.getElementById("form-login-cliente");
    const btnCliente = document.getElementById("btn-cliente");
    const datosEnLocalStorage = JSON.parse(localStorage.getItem("clienteValido"));
    console.log(datosEnLocalStorage, "datosEnLocalStorage linea 14");
    if (datosEnLocalStorage) {
        containerBtn.classList.add("oculto");
        btnCliente.classList.add("oculto");
        sectionInicioPrincipal.classList.add("oculto");
        formLoginCliente.classList.add("oculto");
        const containerProdEncarrito = document.getElementById("container-prod-en-carrito");
        containerProdEncarrito.classList.replace("oculto", "class-container-prod-en-carrito");
        capturarHeader(datosEnLocalStorage);
        carousel();
        mostrarCarrito();
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
        }
    } else {
        alert("Debe completar los campos");
    }
}





/** MOSTRAR LOGIN CLIENTE */
export const mostrarLoginCliente = () => {
    console.log("capturaBtnCliente");
    const containerBtn = document.getElementById("container-botones");
    const btnCliente = document.getElementById("btn-cliente");
    const formLoginCliente = document.getElementById("form-login-cliente");
    containerBtn.classList.add("oculto");
    btnCliente.classList.add("oculto");
    formLoginCliente.classList.replace("oculto", "class-form-login-cliente");
    formLoginCliente.addEventListener("submit", loginCliente);
}

/** CAPTURAR BTN CLIENTE */
export const capturarBtnCliente = () => {
    const btnCliente = document.getElementById("btn-cliente");
    btnCliente.addEventListener("click", mostrarLoginCliente);
    
}