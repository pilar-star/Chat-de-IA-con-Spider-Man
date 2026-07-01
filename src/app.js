import { initChat } from './chat.js';

const routes = {
    '/home': '<p class="p1">BIENVENIDO</p1><p class="p2">Esta página fue pensada y construida para hablar con el mejor héroe de la historia de los héroes, así que adelante:</p2><a href="/chat" id="iniciochat">¡Chatea con...Spider-Man!</a>',
    '/chat': `
        <div class="chat-container">
            <div id="chat-messages" class="messages-area"></div>
            <form id="chat-form">
                <input type="text" id="user-input" placeholder="Escribe un mensaje a Spidey..." required />
                <button type="submit">Enviar</button>
            </form>
        </div>`,
    '/about': '<p class="p1">Acerca de esta página</p1><p class="p2">Aplicación creada para hablar tu amigable vecino...Spider-Man, también conocido como el Hombre Araña. Se eligió este personaje por su gran humor sarcastico, su buen corazon y su capacidad para tejer telarañas.</p2>'
};

function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

function router() {
    const path = window.location.pathname === '/' ? '/home' : window.location.pathname;
    const content = routes[path] || '<p class="p2">Haz click en </p2><p class="p1">INICIO</p1><p class="p2">para recibir una bienvenida. Click en</p2><p class="p1">CHAT</p1><p class="p2">para comenzar a hablar con Spider-Man. Click en</p2><p class="p1">ABOUT</p1><p class="p2">para saber más sobre la página</p2>';
    
    document.getElementById('app').innerHTML = content;

    if (path === '/chat') {
        initChat();
    }
}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[href]')) {
            e.preventDefault();
            navigateTo(e.target.getAttribute('href'));
        }
    });
    router();
});

export function capitalize(text) {
  if (!text || text.length === 0) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}