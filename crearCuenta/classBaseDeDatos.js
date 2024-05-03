class BaseDeDatos {
    constructor() {
        this.baseDeDatosCliente = JSON.parse(localStorage.getItem("usuario")) || [];
    }
    almacenarClientes(usuario) {
        const exitenciaDni = this.corroborarExistenciaDniUsuario(usuario);
        console.log(exitenciaDni);
        if (exitenciaDni) {
            alert("Los datos ya pertenecen a otro usuario, por favor corrobore sus datos");
        } else {
            this.baseDeDatosCliente.push(usuario);
            console.log(this.baseDeDatosCliente);
            localStorage.setItem("usuario", JSON.stringify(this.baseDeDatosCliente));
        }
        
    }
    buscarUsuario(usuario) {
        return this.baseDeDatosCliente.find((el) => el.user === usuario);
    }
    corroborarFechaNacimiento(usuario) {
        return this.baseDeDatosCliente.some((el) => el.fechaNacimiento === usuario);
    }
    corroborarExistenciaDniUsuario(usuario) {
        return this.baseDeDatosCliente.some((el) => el.dni === usuario.dni);
    }
}
export default BaseDeDatos;

/** TEMINASTE LA LOGICA, CREAR CUENTA NUEVO CLIENTE */