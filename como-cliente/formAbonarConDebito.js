import { finalizarCompraConDebito } from "./finalizarCompraConDebito.js";


export const formAbonarConDebito = () => {
    console.log("abonarConDebito");
    const containerSectionProd = document.getElementById("container-seccion-prod");
    containerSectionProd.innerHTML = ``;
    const formAbonarConDebito = document.createElement("form");
    formAbonarConDebito.setAttribute("class", "class-form-abonar-con-debito");
    formAbonarConDebito.innerHTML = `
                                    <div class="class-container-img-tarjetas-debito">
                                    <h5 class="class-titulo-con-debito">Ingrese los datos de su tarjeta de DEBITO por favor</h5>
                                    <img class="class-img-tarjetas-debito" src="./img/img-tarjetas-debito.jpg" alt="img-tarjetas-debito">
                                    </div>
                                    <div class= "class-container-label-debito">
                                        <label  class="class-labes-debito" for="Nº">Nº Tarjeta</label>
                                        <label  class="class-labes-debito" for="Nombre">Nombre y Apellido</label>
                                        <label  class="class-labes-debito" for="caducidad">Caducidad</label>
                                        <label  class="class-labes-debito" for="codigo">Codigo de seguridad</label>
                                    </div>
                                    <div class="class-container-input-debito">
                                        <input class="class-inputs-debito" type="text" id="Nº" name ="input-numero-de-tarjeta">
                                        <div class="class-container-input-nombre-apellido">
                                            <input class="class-inputs-nombre-apellido" type="text" id= "Nombre" name="nombreApellido">
                                        </div>
                                        <div class="class-container-input-caducidad">
                                        <input class="class-inputs-caducidad-uno" type="text" id= "caducidad" name="input-caducidad-mes"  placeholder="Mes">
                                        <input class="class-inputs-caducidad-dos" type="text" id= "caducidad" name="input-caducidad-ano"  placeholder="Año">
                                        </div>
                                        
                                        <input class="class-inputs-debito" type="text" id="codigo" name ="input-codigo-de-seguridad">
                                        <button class="class-btn-aceptar-con-debito">Aceptar</button>
                                    </div>`;
    containerSectionProd.appendChild(formAbonarConDebito);
    formAbonarConDebito.addEventListener("submit", finalizarCompraConDebito);
}