export const validarInputsPagoConTarjeta = (inputNumeroDeTarjeta, inputNombreApellidoTarjeta, inputCaducidadMes, inputCaducidadAno, inputCodigoDeSeguridad) => {
    if (!isNaN(inputNumeroDeTarjeta) && inputNombreApellidoTarjeta.trim() !== "" && !isNaN(inputCaducidadMes) && !isNaN(inputCaducidadAno) && !isNaN(inputCodigoDeSeguridad)) {
        return true
    } else {
        return false;
    }
}