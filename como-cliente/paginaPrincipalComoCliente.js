
import { mostrarProductosSegunCategoria } from "./mostrarProdSeguncategoria.js";

/** Capturar header pagina principal cliente */
export const capturarHeader = (datosEnLocalStorage) => {
    const headerContainer = document.getElementById("header-container");
    console.log(datosEnLocalStorage, "LINEA 6");

    
    const navContainer = document.createElement("nav");
    
    navContainer.setAttribute("class", "navbar navbar-expand-xl navbar-light py-3");
    navContainer.innerHTML = `
                            <div class="container-fluid">
                                <a class="class-titulo-pagina-principal navbar-brand" href="">Bienvenidos a super mercado cado</a>
                                <a class="class-usuario-en-linea nav-link" href="">Hola ${datosEnLocalStorage.nombre} <img id="usuario-login" src="./img/user-img.png" class="oculto" alt="usuario"></a>
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
}

/** TENES QUE AGREGARLE EL EVENTO AL BTN CERRAR SESSION */



/*  */



/* <h1 class="class-titulo-pagina-principal">Super mercado cado</h1>
                            <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLight"
                                aria-controls="navbarLight" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse show class-div-container-ul" id="navbarLight">
                                
                                <ul id="ul-container" class="navbar-nav me-auto mb-2 mb-xl-0 ul-container class-ul-container">
                                    <li class="nav-item class-li">
                                        <a class=" links-pagina-principal  active" href=""><span class="class-usuario-en-linea">bienvenido ${datosEnLocalStorage.nombre}</span>  <img id="usuario-login" src="./img/user-img.png" class="oculto" alt="usuario"></a>
                                    </li>
                                    <li class="nav-item class-li">
                                        <a  class=" links-pagina-principal  " href=""></a>
                                    </li>
                                    <li class="nav-item class-li">
                                        <a id="panificado" class=" links-pagina-principal  active " href="">Panificado</a>
                                    </li>
                                    <li class="nav-item class-li">
                                        <a id="carne" class=" links-pagina-principal  "  href="">Carnes</a>
                                    </li>
                                    <li class="nav-item class-li">
                                        <a id="aderezos" class=" links-pagina-principal  " href="">Aderezos y salsas</a>
                                    </li>
                                    <li class="nav-item class-li">
                                        <a id="limpieza" class=" links-pagina-principal  " href="">Limpieza</a>
                                    </li>
                                    <li class="nav-item class-li">
                                        <a id="bebidas" class=" links-pagina-principal  " href="">Bebidas</a>
                                    </li>
                                    <li class="nav-item class-li">
                                        <a id="fiambres" class="links-pagina-principal " href="">Fiambres</a>
                                    </li>
                                </ul>
                            </div>
                        </div> */