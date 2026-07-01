import { initChat } from './chat.js';

const routes = {
    '/home': '<h1>Bienvenide a ComicSansCon</h1>',
    '/chat': `
        <div class="chat-container">
            <div id="chat-messages" class="messages-area"></div>
            <form id="chat-form">
                <input type="text" id="user-input" placeholder="Escribe un mensaje a Spidey..." required />
                <button type="submit">Enviar</button>
            </form>
        </div>`,
    '/about': '<h1>Acerca de esta página</h1><p>Aplicación creada para hablar tu amigable vecino...Spider-Man, también conocido como el Hombre Araña.</p>'
};

function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

function router() {
    const path = window.location.pathname === '/' ? '/home' : window.location.pathname;
    const content = routes[path] || '<h1>404 - No encontrado</h1>';
    
    document.getElementById('app').innerHTML = path;

    if (path === '/chat') {
        initChat();
    }
    if (path === '/home') {
        document.getElementById('app').innerHTML = routes['/home'];
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