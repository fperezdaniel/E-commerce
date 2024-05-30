export const footer = () => {
    const footer = document.getElementById("footer");
    footer.setAttribute("class", "class-footer");
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("class", "class-container-div-footer");
    containerDiv.innerHTML = `
                            <div class="class-lem-e-img">
                            <h5 class = "class-titulo-lema">Siempre junto a vos</h5>
                            <img src="./img/chango.png" alt="img-carrito-footer" class = "class-carrito-footer">
                            </div>
                            <div class = "class-container-horario">
                                <p class = "contactanos">Contactanos</p>
                                <p class = "class-p-footer">0810-123-321</p>
                                <p class = "class-p-footer">Lunes a Viernes 8hs a 17hs.</p>
                                <p class = "class-p-footer">Sados y Domingo de 10hs a 14hs.</p>
                            </div>
                            <div class = "class-container-redes">
                                <p class = "class-p-footer nuestras">Nuestras redes</p>
                                <p class="class-p-footer"><img class="class-logo-facebook" src="./img/logo facebook.png" alt="Logo-face"> Facebook</p>
                                <p class = "class-p-footer"> <img class="class-logo-instagram" src="./img/logo-minimalist-instagram.png" alt="Logo-intagram">
                                Instagram</p>
                            </div>
                            <div class = "class-container-logo-wasap">
                            <img src="./img/logo-wasap.png" class="class-logo-wasap" alt="logo-wasap">
                            </div>`;
    footer.appendChild(containerDiv);
}

