
import { mostrarProductosSegunCategoria } from "./mostrarProdSeguncategoria.js";
import { cerrarSesion } from "./cerrarSession.js";
/** Capturar header pagina principal cliente */
export const capturarHeader = (datosEnLocalStorage) => {
    const headerContainer = document.getElementById("header-container");
    console.log(datosEnLocalStorage, "LINEA 6");
    
    const navContainer = document.createElement("nav");
    
    navContainer.setAttribute("class", "navbar navbar-expand-xl navbar-light py-3");
    navContainer.innerHTML = `
                            <div class="container-fluid">
                                <a class="class-titulo-pagina-principal navbar-brand" href="">Bienvenidos a super mercado cado</a>
                                <button id= "btnCerrarSesion" class="nav-link class-btn-cerrar-sesion" >Cerrar sesion</button>
                                <a class="class-usuario-en-linea nav-link" href="">Hola ${datosEnLocalStorage.user} <img id="usuario-login" src="./img/user-img.png" class="oculto" alt="usuario"></a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark"
                                    aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="class-div-container-ul collapse navbar-collapse" id="navbarDark">
                                    <ul class="class-ul-container navbar-nav me-auto mb-2 mb-xl-0">
                                        <li class="class-li nav-item">
                                            <a id="panificado" class="nav-link active" aria-current="page" href="">Panificado</a>
                                        </li>
                                        <li class="class-li nav-item">
                                            <a id="carne" class="nav-link" href="">Carne</a>
                                        </li>
                                        <li class="class-li nav-item">
                                            <a id="aderezos" class="nav-link" href="">Aderezos</a>
                                        </li>
                                        <li class="class-li nav-item">
                                            <a id="limpieza" class="nav-link" href="">Limpieza</a>
                                        </li>
                                        <li class="class-li nav-item">
                                            <a id="bebidas" class="nav-link" href="">Bebidas</a>
                                        </li>
                                        <li class="class-li nav-item">
                                            <a id="fiambres" class="nav-link" href="">Fiambres</a>
                                        </li>
                                </div>
                            </div>
                            `;
    headerContainer.appendChild(navContainer);
    const imgUser = document.getElementById("usuario-login");
    imgUser.classList.replace("oculto", "class-img-usuario")
    ///////**/ *//////
    const linksPorClass = document.getElementsByClassName("nav-link");
    console.log(linksPorClass);
    for (const link of linksPorClass) {
        link.addEventListener("click", mostrarProductosSegunCategoria);
    }
    const btnCerraSesion = document.getElementById("btnCerrarSesion");
    btnCerraSesion.addEventListener("click", cerrarSesion);

}