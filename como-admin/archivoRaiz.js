/* import productos from "./arrayProductos.js"; */
import { capturarBtnAdmin } from "./loginComoAdmin.js";
import { validandoDatosAlmacenados } from "./loginComoAdmin.js";
import { capturarBtnCliente } from "../como-cliente/loginComoCliente.js";
import { validandoDatosEnLocalStorage } from "../como-cliente/loginComoCliente.js";
import { capturarBtnCrearCuenta } from "../crearCuenta/crearCuentaNuevoCliente.js";
import { agregarAlCarrito } from "../como-cliente/agregarAlCarrito.js";
import { mostrarCarrito } from "../como-cliente/agregarAlCarrito.js"; 

validandoDatosAlmacenados();
capturarBtnAdmin();
capturarBtnCliente();
validandoDatosEnLocalStorage();
capturarBtnCrearCuenta();
agregarAlCarrito();
mostrarCarrito();
