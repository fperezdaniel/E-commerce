import { crearMenuprincipal } from "./menuPrincipalAdmin.js";




const obtenerBaseDedatos = async () => {
    const res = await fetch("./como-admin/baseDeDatosAdmin.json")
    const data = await res.json()
    return data;
}
export const validandoDatosAlmacenados = () => {
    const containerBtn = document.getElementById("container-botones");
    const btnAdmin = document.getElementById("btn-admin");
    const sectionInicioPrincipal = document.getElementById("section-inicio-principal");
    const formLoginAdmin = document.getElementById("form-login-admin");
    const datosAlmacenados = JSON.parse(localStorage.getItem("usuarioValido"))
    if (datosAlmacenados) {
        sectionInicioPrincipal.innerHTML = ``;
        containerBtn.classList.add("oculto");
        btnAdmin.classList.add("oculto");
        sectionInicioPrincipal.classList.add("oculto");
        formLoginAdmin.classList.add("oculto");

        crearMenuprincipal();
    }
}
const loginAdmin = (e) => {
    e.preventDefault();
    obtenerBaseDedatos()
        .then(data => {

            const containerBtn = document.getElementById("container-botones");
            const btnAdmin = document.getElementById("btn-admin");
            const formLoginAdmin = document.getElementById("form-login-admin");
            const eventFormAdmin = e.target;
            console.log(eventFormAdmin);
            const inputUsuarioAdmin = eventFormAdmin["input-usuario-admin"].value;
            console.log(inputUsuarioAdmin);
            const inputContrasenaAdmin = eventFormAdmin["input-contrasena-admin"].value;
            console.log(inputContrasenaAdmin);
            if (inputUsuarioAdmin !== "" && inputContrasenaAdmin !== "") {
                const usuarioValido = data.find((el) => el.usuario === inputUsuarioAdmin);
                console.log(usuarioValido);
                if (usuarioValido) {
                    if (usuarioValido.contrasenia === inputContrasenaAdmin) {
                        const sectionInicioPrincipal = document.getElementById("section-inicio-principal");
                        sectionInicioPrincipal.innerHTML = ``;
                        containerBtn.classList.add("oculto");
                        btnAdmin.classList.add("oculto");
                        sectionInicioPrincipal.classList.add("oculto");
                        formLoginAdmin.classList.add("oculto");
                        localStorage.setItem("usuarioValido", JSON.stringify(usuarioValido))
                        crearMenuprincipal();
                    } else {
                        alert("Contraseña invalida");
                    }
                } else {
                    alert("Usuario invalido");
                }

            } else {
                alert("complete los campos");
            }
        })
}



const mostrarLoginAdmin = () => {
    const containerBtn = document.getElementById("container-botones");
    const btnAdmin = document.getElementById("btn-admin");
    const formLoginAdmin = document.getElementById("form-login-admin");
    containerBtn.classList.add("oculto");
    btnAdmin.classList.replace("btn-container", "oculto");
    formLoginAdmin.classList.replace("oculto", "form-login-admin-estilos");
    formLoginAdmin.addEventListener("submit", loginAdmin);
}


export const capturarBtnAdmin = () => {
    const btnAdmin = document.getElementById("btn-admin");
    btnAdmin.addEventListener("click", mostrarLoginAdmin);
}



/**Segui con los estilos tal ves al colocarlos a su medida se acomode todo el codigo */