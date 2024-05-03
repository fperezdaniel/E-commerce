/* import productos from "./arrayProductos.js"; */
import { capturarBtnAdmin } from "./loginComoAdmin.js";
import { validandoDatosAlmacenados } from "./loginComoAdmin.js";
import { capturarBtnCliente } from "../como-cliente/loginComoCliente.js";
import { validandoDatosEnLocalStorage } from "../como-cliente/loginComoCliente.js";
import { capturarBtnCrearCuenta } from "../crearCuenta/crearCuentaNuevoCliente.js";
validandoDatosAlmacenados();
capturarBtnAdmin();
capturarBtnCliente();
validandoDatosEnLocalStorage();
capturarBtnCrearCuenta();
