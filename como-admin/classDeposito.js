import { objetoDeposito } from "./cargaProd.js";
import Producto from "./classProducto.js";
class Deposito {
    constructor() {
        this.deposito = JSON.parse(localStorage.getItem("producto")) || [];
    }
    agregarProductoAlDeposito(prod) {
        const prodExistente = this.corroborarExistenciaProd(prod);
        if (prodExistente) {
            alert("Este producto ya se encuentra en deposito");
            const indiceDelProducto = this.buscarProdPorIndice(prod);
            this.deposito[indiceDelProducto].stock += prod.stock;
            this.deposito[indiceDelProducto].precio = prod.precio;
        } else {
            alert("Nuevo producto agregado al deposito");
            this.deposito.push(prod);
            console.log(this.deposito, "this.deposito linea 17");
        }
        localStorage.setItem("producto", JSON.stringify(this.deposito));
    }

    renderizarProd(prod) {
        console.log(prod, "linea 11");
        const sectionProdRenderizado = document.getElementById("section-prod-renderizado");
        console.log(sectionProdRenderizado, "linea 12");
        sectionProdRenderizado.innerHTML = ``;
        prod.forEach((el) => {
            const cardProducto = document.createElement("div");
            cardProducto.setAttribute("class", "card-producto");
            cardProducto.innerHTML = `
                                <div class= "div-card-prod">
                                    <p>Categoria: ${el.categoria}</p>
                                    <p>Nombre: ${el.nombre}</p>
                                    <p>Marca: ${el.marca}</p>
                                    <p>Codigo: ${el.codigo}</p>
                                    <p>Stock: ${el.stock}</p>
                                    <p>Precio: ${el.precio}</p>
                                    <p>Total: ${el.stock * el.precio}</p>
                                </div>
                                <div class="class-div-btn-form-modificar">
                                    <button class="class-btn-modificar" data-id="${el.id}">Modificar</button>
                                </div>`;
            sectionProdRenderizado.appendChild(cardProducto);
        });
        const btnModificar = document.getElementsByClassName("class-btn-modificar");

        const modificarProd = (e) => {
            e.preventDefault();
            const eventoForm = e.target;
            console.log(eventoForm);
            const inputCategoriaAModificar = eventoForm["input-mod-categoria"].value.toLowerCase();
            console.log(inputCategoriaAModificar);
            const inputNombreAModificar = eventoForm["input-mod-nombre"].value.toLowerCase();
            console.log(inputNombreAModificar);
            const inputMarcaAModificar = eventoForm["input-mod-marca"].value.toLowerCase();
            console.log(inputMarcaAModificar);
            const inputCodigoAModificar = eventoForm["input-mod-codigo"].value.toUpperCase();
            console.log(inputCodigoAModificar);
            const inputStockAModificar = parseInt(eventoForm["input-mod-stock"].value);
            console.log(inputStockAModificar);
            const inputPrecioAModificar = parseFloat(eventoForm["input-mod-precio"].value);
            console.log(inputPrecioAModificar);
            if (inputCategoriaAModificar.trim() !== "" && inputNombreAModificar.trim() !== "" && inputMarcaAModificar.trim() !== "" && inputCodigoAModificar.trim() !== "" && !isNaN(inputStockAModificar) && !isNaN(inputPrecioAModificar)) {
                const prodModoficado = new Producto({
                    categoria: inputCategoriaAModificar,
                    nombre: inputNombreAModificar,
                    marca: inputMarcaAModificar,
                    codigo: inputCodigoAModificar,
                    stock: inputStockAModificar,
                    precio: inputPrecioAModificar,
                });
                console.log(prodModoficado)
                objetoDeposito.agregarProductoAlDeposito(prodModoficado);
                objetoDeposito.renderizarProd(objetoDeposito.deposito);
            }
        }
        const crearFormModificarProd = (e) => {
            const eventoBtnModificar = e.target.dataset.id;
            const sectionModificarProd = document.getElementById("section-modificar-prod");
            console.log(sectionModificarProd);
            sectionModificarProd.innerHTML = ``;
            const formMordificarProd = document.createElement("form");
            formMordificarProd.setAttribute("class", "form-modificar-prod")
            formMordificarProd.innerHTML = `
                                                <h5 class="titulo-mod-prod">Ingrese los datos que desea modificar</h5> 
                                                <input class="class-input-modificar-prod" name="input-mod-categoria" type="text" placeholder="Categoria">
                                                <input class="class-input-modificar-prod" name="input-mod-nombre" type="text" placeholder="Nombre">
                                                <input class="class-input-modificar-prod" name="input-mod-marca" type="text" placeholder="Marca">
                                                <input class="class-input-modificar-prod" name="input-mod-codigo" type="text" placeholder="Codigo">
                                                <input class="class-input-modificar-prod" name="input-mod-stock" type="text" placeholder="Stock">
                                                <input class="class-input-modificar-prod" name="input-mod-precio" type="text" placeholder="Precio">
                                                <button class="class-btn-form-modificar-prod">Aceptar</button>
                                                <button class="class-btn-form-modificar-prod" type="reset">Borrar datos en campos</button>
                                                <button id="btn-cerrar-form-modificar"class="class-btn-form-modificar-prod">Cerrar formulario</button>`;
            sectionModificarProd.appendChild(formMordificarProd);
            formMordificarProd.addEventListener("submit", modificarProd);
            const btnCerrarFormModificar = document.getElementById("btn-cerrar-form-modificar");
            btnCerrarFormModificar.addEventListener("click", () => {
                const sectionModificarProd = document.getElementById("section-modificar-prod");
                console.log(sectionModificarProd);
                sectionModificarProd.innerHTML = ``;
            })
        }
        for (const btn of btnModificar) {
            btn.addEventListener("click", crearFormModificarProd)
        }
    }
    renderizarProdEncontrado(prod) {
        const sectionProdRenderizado = document.getElementById("section-prod-renderizado");
        sectionProdRenderizado.innerHTML = ``;
        const cardProdEncontrado = document.createElement("div");
        cardProdEncontrado.setAttribute("class", "class-prod-encontrado");
        cardProdEncontrado.innerHTML = `
                                <div class= "div-card-prod-encontrado">
                                    <p>Categoria: ${prod.categoria}</p>
                                    <p>Nombre: ${prod.nombre}</p>
                                    <p>Marca: ${prod.marca}</p>
                                    <p>Codigo: ${prod.codigo}</p>
                                    <p>Stock: ${prod.stock}</p>
                                    <p>Precio: ${prod.precio}</p>
                                </div>`;
        sectionProdRenderizado.appendChild(cardProdEncontrado);
    }
    filtrarProd(prod) {
        return this.deposito.filter((el) => el.categoria === prod);
    }
    buscarProd(prod) {
        return this.deposito.find((el) => el.nombre.toLowerCase().includes(prod));
    }
    corroborarExistenciaProd(prod) {
        return this.deposito.some((el) => el.codigo === prod.codigo);
    }
    buscarProdPorIndice(prod) {
        return this.deposito.findIndex((el) => el.codigo === prod.codigo);
    }
    calcularTotalProd() {
        return this.deposito.reduce((acc, el) => acc += el.precio * el.stock, 0);
    }
}
export default Deposito;

