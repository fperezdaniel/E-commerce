import DatosCliente from "./classDatosCliente.js";
import BaseDeDatos from "./classBaseDeDatos.js";
import { validarInputsRegistro } from "./validandoInputsRegistro.js";
/* import { mostrarLoginCliente } from "../como-cliente/loginComoCliente.js";
 */
export const objetoBaseDeDatos = new BaseDeDatos();

const cargaDeDatosUsuarioNuevo = (e) => {
    e.preventDefault();
    const eventoFormNuevoCliente = e.target;
    console.log("linea 6 eventoFormNuevoCliente: ", eventoFormNuevoCliente);
    const inputUsuarioRegistro = eventoFormNuevoCliente["input-usuario-registro"].value;
    console.log(inputUsuarioRegistro);
    const inputContrasenaRegistro = eventoFormNuevoCliente["input-contrasena-registro"].value;
    console.log(inputContrasenaRegistro);
    const inputsRegistroValidados = validarInputsRegistro(inputNombreRegistro, inputApellidoRegistro, inputFechaNacimiento, inputSexoRegistro, inputDniRegistro, inputEstadoCivil, inputEmail, inputUsuarioRegistro, inputContrasenaRegistro);
    console.log(inputsRegistroValidados);
    if (inputsRegistroValidados) {
        const nuevoClienteRegistrado = new DatosCliente({
            user: inputUsuarioRegistro,
            pass: inputContrasenaRegistro,
        });
        console.log("linea 39 nuevoClienteRegistrado ", nuevoClienteRegistrado);
        objetoBaseDeDatos.almacenarClientes(nuevoClienteRegistrado);
        const formCrearUsuario = document.getElementById("form-crear-usuario");
        const btnAdmin = document.getElementById("btn-admin");
        formCrearUsuario.classList.replace("class-form-crear-usuario", "oculto");
        console.log("Datos cargados correctamente");
        const tituloInicioPrincipal = document.getElementById("titulo-inicio-principal");
        tituloInicioPrincipal.classList.replace("oculto", "titulo-inicio-principal"),
        btnAdmin.classList.replace("oculto", "estilos-btn-admin");
        const containerBtn = document.getElementById("container-botones");
        containerBtn.classList.replace("oculto", "btn-container");
        const btnCliente = document.getElementById("btn-cliente");
        btnCliente.classList.replace("oculto", "estilos-btn-cliente");
        const btnCrearCuenta = document.getElementById("btn-crear-cuenta");
        btnCrearCuenta.classList.replace("oculto", "class-btn-crear-cuenta-cliente");
    } else {
        alert("Complete todo los campos por favor");
    }
}

const mostrarFormCargaDeDatosUsuarioNuevo = () => {
    console.log("hola");
    const tituloPaginaPrincipal = document.getElementById("titulo-inicio-principal");
    const btnCrearCuenta = document.getElementById("btn-crear-cuenta");
    const containerBtn = document.getElementById("container-botones");
    const btnCliente = document.getElementById("btn-cliente");
    const btnAdmin = document.getElementById("btn-admin");
    const formLoginCliente = document.getElementById("form-login-cliente");
    const formCrearUsuario = document.getElementById("form-crear-usuario");
    formLoginCliente.classList.add("oculto");
    btnCliente.classList.add("oculto");
    btnAdmin.classList.add("oculto");
    tituloPaginaPrincipal.classList.add("oculto");
    containerBtn.classList.add("oculto");
    btnCrearCuenta.classList.add("oculto");
    formCrearUsuario.classList.replace("oculto", "class-form-crear-usuario");
    formCrearUsuario.addEventListener("submit", cargaDeDatosUsuarioNuevo);
}







export const capturarBtnCrearCuenta = () => {
    const btnCrearCuenta = document.getElementById("btn-crear-cuenta");
    btnCrearCuenta.addEventListener("click", mostrarFormCargaDeDatosUsuarioNuevo);
}