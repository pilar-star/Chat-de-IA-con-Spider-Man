export function esMensajeValido(mensaje) {
    if (!mensaje) return false;
    return mensaje.trim().length > 0;
}

export function formatearNombre(rol) {
    return rol === 'user' ? 'Tú' : 'Spider-Man';
}

export function escaparHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}