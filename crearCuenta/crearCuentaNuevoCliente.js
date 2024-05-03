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
    const inputNombreRegistro = eventoFormNuevoCliente["input-nombre-registro"].value.toLowerCase();
    console.log(inputNombreRegistro);
    const inputApellidoRegistro = eventoFormNuevoCliente["input-apellido-registro"].value.toLowerCase();
    console.log(inputApellidoRegistro);
    const inputFechaNacimiento = eventoFormNuevoCliente["input-fecha-registro"].value.toLowerCase();
    console.log(inputFechaNacimiento);
    const inputSexoRegistro = eventoFormNuevoCliente["input-sexo-registro"].value.toLowerCase();
    console.log(inputSexoRegistro);
    const inputDniRegistro = parseInt(eventoFormNuevoCliente["input-dni-registro"].value);
    console.log(inputDniRegistro);
    const inputEstadoCivil = eventoFormNuevoCliente["input-estado-civil-registro"].value.toLowerCase();
    console.log(inputEstadoCivil);
    const inputEmail = eventoFormNuevoCliente["input-mail-registro"].value;
    console.log(inputEmail);
    const inputUsuarioRegistro = eventoFormNuevoCliente["input-usuario-registro"].value;
    console.log(inputUsuarioRegistro);
    const inputContrasenaRegistro = eventoFormNuevoCliente["input-contrasena-registro"].value;
    console.log(inputContrasenaRegistro);
    const inputsRegistroValidados = validarInputsRegistro(inputNombreRegistro, inputApellidoRegistro, inputFechaNacimiento, inputSexoRegistro, inputDniRegistro, inputEstadoCivil, inputEmail, inputUsuarioRegistro, inputContrasenaRegistro);
    console.log(inputsRegistroValidados);
    if (inputsRegistroValidados) {
        const nuevoClienteRegistrado = new DatosCliente({
            nombre: inputNombreRegistro,
            apellido: inputApellidoRegistro,
            fechaNacimiento: inputFechaNacimiento,
            sexo: inputSexoRegistro,
            dni: inputDniRegistro,
            estadoCivil: inputEstadoCivil,
            email: inputEmail,
            user: inputUsuarioRegistro,
            pass: inputContrasenaRegistro,
        });
        console.log("linea 39 nuevoClienteRegistrado ", nuevoClienteRegistrado);
        objetoBaseDeDatos.almacenarClientes(nuevoClienteRegistrado);
        const formCrearUsuario = document.getElementById("form-crear-usuario");
        formCrearUsuario.classList.replace("class-form-crear-usuario", "oculto");
        console.log("Datos cargados correctamente");
        const containerBtn = document.getElementById("container-botones");
        containerBtn.classList.replace("oculto", "btn-container");
        const btnCliente = document.getElementById("btn-cliente");
        btnCliente.classList.replace("oculto", "estilos-btn-cliente");
        const btnCrearCuenta = document.getElementById("btn-crear-cuenta");
        btnCrearCuenta.classList.replace("oculto", "class-btn-crear-cuenta-cliente")
    } else {
        alert("Complete todo los campos por favor");
    }
}

const mostrarFormCargaDeDatosUsuarioNuevo = () => {
    console.log("hola")
    const btnCrearCuenta = document.getElementById("btn-crear-cuenta");
    const containerBtn = document.getElementById("container-botones");
    const btnCliente = document.getElementById("btn-cliente");
    const formLoginCliente = document.getElementById("form-login-cliente");
    const formCrearUsuario = document.getElementById("form-crear-usuario");
    formLoginCliente.classList.add("oculto");
    btnCliente.classList.add("oculto");
    containerBtn.classList.add("oculto");
    btnCrearCuenta.classList.add("oculto");
    formCrearUsuario.classList.replace("oculto", "class-form-crear-usuario");
    formCrearUsuario.addEventListener("submit", cargaDeDatosUsuarioNuevo);
}







export const capturarBtnCrearCuenta = () => {
    const btnCrearCuenta = document.getElementById("btn-crear-cuenta");
    btnCrearCuenta.addEventListener("click", mostrarFormCargaDeDatosUsuarioNuevo);
}