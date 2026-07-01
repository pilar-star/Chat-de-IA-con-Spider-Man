let chatHistory = [];

export function initChat() {
    const form = document.getElementById('chat-form');
    const input = document.getElementById('user-input');
    const messagesArea = document.getElementById('chat-messages');

    renderMessages(messagesArea);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = input.value.trim();
        if (!message) return;

        chatHistory.push({ role: 'user', parts: [{ text: message }] });
        renderMessages(messagesArea);
        input.value = '';

        const loadingPrompt = document.createElement('p');
        loadingPrompt.innerText = "Spider-Man está escribiendo...";
        messagesArea.appendChild(loadingPrompt);

        setTimeout(() => {
            loadingPrompt.remove();
            const respuestasSpidey = [
                "¡Hola! Ojalá mis lanzarredes funcionaran tan rápido como escribes.",
                "¡Por todos los cielos! Eso suena como un problema para el amigable vecino Spider-Man.",
                "Lo siento, estaba combatiendo al Duende Verde. ¿Qué me decías?",
                "¡Un gran poder conlleva una gran responsabilidad... de responder este chat!"
            ];
            const respuestaAleatoria = respuestasSpidey[Math.floor(Math.random() * respuestasSpidey.length)];
            chatHistory.push({ role: 'model', parts: [{ text: respuestaAleatoria }] });
            renderMessages(messagesArea);
        }, 1500); 
    });
}
function renderMessages(container) {
    container.innerHTML = chatHistory.map(msg => `
        <div class="message ${msg.role === 'user' ? 'user-msg' : 'spidey-msg'}">
            <p>${msg.parts[0].text}</p>
        </div>
    `).join('');
    container.scrollTop = container.scrollHeight;
}
