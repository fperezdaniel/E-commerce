export const cerrarSesion = () => {
    localStorage.removeItem("clienteValido");
    window.location.href = './index.html';
}