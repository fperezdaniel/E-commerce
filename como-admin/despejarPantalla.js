export const despejarPantalla = () => {
    const mainAdmin = document.getElementById("main-admin");
    mainAdmin.innerHTML = ``;
    const sectionProdRenderizado = document.getElementById("section-prod-renderizado");
    sectionProdRenderizado.innerHTML = ``;
    const sectionModificarProd = document.getElementById("section-modificar-prod");
    console.log(sectionModificarProd);
    sectionModificarProd.innerHTML = ``;
}