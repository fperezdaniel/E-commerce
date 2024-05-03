export const validarInputCargaProd = (inputCategoria, inputNombre, inputMarca, inputCodigo, inputStock, inputPrecio) => {
    if (inputCategoria.trim() !== "" && inputNombre.trim() !== "" && inputMarca.trim() !== "" && inputCodigo.trim() !== "" && !isNaN(inputStock) && !isNaN(inputPrecio)){
        return true
    }else {
        return false;
    }
}









