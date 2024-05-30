export const validarInputsRegistro = (usuario, contrasena) =>{
    if( usuario.trim() !== "" && contrasena.trim() !== ""){
        return true;
    }else {
        return false;
    }
}
