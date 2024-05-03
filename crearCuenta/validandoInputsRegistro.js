export const validarInputsRegistro = (nombre, apellido, fechaNacimiento, sexo, dni, estadoCivil, email, usuario, contrasena) =>{
    if(nombre.trim() !== "" && apellido.trim() !== "" && fechaNacimiento.trim() !== "" && sexo.trim() !== "" && !isNaN(dni) && estadoCivil.trim() !== "" && email.trim() !== "" && usuario.trim() !== "" && contrasena.trim() !== ""){
        return true;
    }else {
        return false;
    }
}
