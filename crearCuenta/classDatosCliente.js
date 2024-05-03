class DatosCliente {
    constructor({ nombre, apellido, fechaNacimiento, sexo, dni, estadoCivil, email, user, pass }) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
        this.dni = dni;
        this.estadoCivil = estadoCivil;
        this.email = email;
        this.user = user;
        this.pass = pass;
    }
}
export default DatosCliente;