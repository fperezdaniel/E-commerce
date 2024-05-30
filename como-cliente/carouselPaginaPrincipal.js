/* Body.appendchild(carousel) */
/*  py-2 d-block */
export const carousel = () => {
    const sectionContainerCarousel = document.getElementById("section-container-carousel");
    sectionContainerCarousel.innerHTML = ``;
    const containerCarousel = document.createElement("div");
    containerCarousel.setAttribute("class", "container d-block py-2 w-100");
    containerCarousel.innerHTML = `
                                        <div class="container__div__carousel">
                                            <h2 class="class-titulo-carousel">Las ofertas para tu bolsillo</h2>
                                        </div>
                                        <div id="carouselWithIndicators" class="carousel slide main__carousel" data-bs-ride="carousel">
                                            <ol class="carousel-indicators">
                                                <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="0" class="active"></li>
                                                <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="1"></li>
                                                <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="2"></li>
                                                <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="3"></li>
                                            </ol>
                                            <div class="carousel-inner container-carousel">
                                                <div class="carousel-item active">
                                                    <img src="./img/img-carusel.jpg" class="d-block w-100"
                                                        alt="img-carousel-1">
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./img/img-carouse-2.jpg" class="d-block w-100"
                                                        alt="img-carousel-2">
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./img/img-carousel-3.jpg" class="d-block w-100"
                                                        alt="img-carousel-3">
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./img/carousel-4.jpg" class="d-block w-100"
                                                        alt="img-carousel-4">
                                                </div>
                                            </div>
                                            <a class="carousel-control-prev" href="#carouselWithIndicators" role="button" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </a>
                                            <a class="carousel-control-next" href="#carouselWithIndicators" role="button" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </a>
                                        </div>`;
    sectionContainerCarousel.appendChild(containerCarousel);
}