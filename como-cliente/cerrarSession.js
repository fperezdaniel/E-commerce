export const cerrarSesion = () => {
    localStorage.clear();
    window.location.href = '../index.html';
}