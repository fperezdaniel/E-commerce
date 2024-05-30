import { finalizarCompraConCredito } from "./finalizarCompraConCredito.js";


export const formAbonarConCredito = () => {
    console.log("formAbonarConCredito");
    const seccionCentralMain = document.getElementById("seccion-central-main");
    seccionCentralMain.innerHTML = ``;
    const formAbonarConCredito = document.createElement("form");
    formAbonarConCredito.setAttribute("class", "class-form-abonar-con-debito");
    formAbonarConCredito.innerHTML = `
                                    <div class="class-container-img-tarjetas-debito">
                                    <h5 class="class-titulo-con-debito">Ingrese los datos de su tarjeta de Credito por favor</h5>
                                    <img class="class-img-tarjetas-debito" src="./img/img-tarjetas-debito.jpg" alt="img-tarjetas-debito">
                                    </div>
                                    <div class= "class-container-label-debito">
                                        <label  class="class-labes-debito" for="Nº-credito">Nº Tarjeta</label>
                                        <label  class="class-labes-debito" for="Nombre-credito">Nombre y Apellido</label>
                                        <label  class="class-labes-debito" for="caducidad-credito">Caducidad</label>
                                        <label  class="class-labes-debito" for="codigo-credito">Codigo de seguridad</label>
                                    </div>
                                    <div class="class-container-input-debito">
                                        <input class="class-inputs-debito" type="text" id="Nº-credito" name ="input-numero-de-tarjeta-credito">
                                        <div  class="class-container-input-nombre-apellido">
                                            <input class="class-inputs-nombre-apellido" type="text" id= "Nombre-credito" name="nombre-apellido-credito">
                                        </div>
                                        <div class="class-container-input-caducidad">
                                        <input class="class-inputs-caducidad-uno" type="text" id= "caducidad-credito" name="input-caducidad-mes-credito"  placeholder="Mes">
                                        <input class="class-inputs-caducidad-dos" type="text" id= "caducidad" name="input-caducidad-ano-credito"  placeholder="Año">
                                        </div>
                                        
                                        <input class="class-inputs-debito" type="text" id="codigo" name ="input-codigo-de-seguridad-credito">
                                        <button class="class-btn-aceptar-con-debito">Aceptar</button>
                                    </div>`;
    seccionCentralMain.appendChild(formAbonarConCredito);
    formAbonarConCredito.addEventListener("submit", finalizarCompraConCredito);

}