import { validarInputCargaProd } from "./validarInputCargaProd.js";
import Producto from "./classProducto.js";
import Deposito from "./classDeposito.js";
/* import productos from "./arrayProductos.json"; */
export const objetoDeposito = new Deposito();
export const obtenerProd = async ()=>{
    const res = await fetch("./como-admin/arrayProductos.json")
    const data = await res.json()
    return data;
}

obtenerProd().then(data=> localStorage.setItem("producto", JSON.stringify(data)))


/** CARGA PRODUCTO */
const cargaDeProd = (e) => {
    e.preventDefault();
    const formCargaProd = e.target;
    console.log(formCargaProd);
    const inputCategoria = formCargaProd["input-categoria"].value.toLowerCase();
    console.log(inputCategoria);
    const inputNombre = formCargaProd["input-nombre"].value.toLowerCase();
    console.log(inputNombre);
    const inputMarca = formCargaProd["input-marca"].value.toLowerCase();
    console.log(inputMarca);
    const inputCodigo = formCargaProd["input-codigo"].value.toUpperCase();
    console.log(inputCodigo);
    const inputStock = parseInt(formCargaProd["input-stock"].value);
    console.log(inputStock);
    const inputPrecio = parseFloat(formCargaProd["input-precio"].value);
    console.log(inputPrecio);
    const inputsValidados = validarInputCargaProd(inputCategoria, inputNombre, inputMarca, inputCodigo, inputStock, inputPrecio);
    console.log(inputsValidados);
    if (inputsValidados) {
        const prodCargadoPorAdmin = new Producto({
            categoria: inputCategoria,
            nombre: inputNombre,
            marca: inputMarca,
            codigo: inputCodigo,
            stock: inputStock,
            precio: inputPrecio,
        });
        console.log(prodCargadoPorAdmin);
        objetoDeposito.agregarProductoAlDeposito(prodCargadoPorAdmin);
        const totalProd = objetoDeposito.calcularTotalProd(objetoDeposito.deposito);
        console.log(totalProd);
        objetoDeposito.renderizarProd(objetoDeposito.deposito);
    } else {
        alert("Debe completar todos los campos");
    }
}





/** FORMULARIO CARGA PRODUCTO */
export const crearFormCargaProd = (e) => {
    console.log("cargaProd");
    const mainAdmin = document.getElementById("main-admin");
    mainAdmin.innerHTML = ``;
    const containerCargaProd = document.createElement("div");
    containerCargaProd.setAttribute("class", "container-carga-prod");
    containerCargaProd.innerHTML = `
                                    <form id="form-carga-prod" class= "estilos-form-carga-prod">
                                        <h5 class= "titulo-carga-prod">Carga producto</h5>
                                        <input class="class-input-carga-prod" type="text" placeholder="Categoria" name="input-categoria">
                                        <input class="class-input-carga-prod" type="text" placeholder="Nombre" name="input-nombre">
                                        <input class="class-input-carga-prod" type="text" placeholder="Marca" name="input-marca">
                                        <input class="class-input-carga-prod" type="text" placeholder="Codigo" name="input-codigo">
                                        <input class="class-input-carga-prod" type="text" placeholder="Stock" name="input-stock">
                                        <input class="class-input-carga-prod" type="text" placeholder="Precio" name="input-precio">
                                        <button id="btn-aceptar-carga" class= "btn-carga-prod">Aceptar</button>
                                        <button id="btn-cancelar-carga" class= "btn-carga-prod" type="reset">Cancelar</button>
                                    </form>`;
    mainAdmin.appendChild(containerCargaProd);
    const formCargaProd = document.getElementById("form-carga-prod");
    formCargaProd.addEventListener("submit", cargaDeProd)
}