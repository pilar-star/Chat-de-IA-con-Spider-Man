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

        chatHistory.push({ 
            role: 'user', 
            parts: [{ text: message }] 
        });
        renderMessages(messagesArea);
        input.value = '';

        const loadingPrompt = document.createElement('p');
        loadingPrompt.innerText = "Spider-Man está escribiendo...";
        messagesArea.appendChild(loadingPrompt);

        try {
            const response = await fetch('/api/functions.js', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ history: chatHistory })
            });

            const data = await response.json();

            if (response.ok) {
                chatHistory.push({
                    role: 'model',
                    parts: [{ text: data.reply }]
                });
            } else {
                throw new Error(data.detalle || data.error);
            }
        } catch (error) {
            alert('¡Oh no! Parece que se cortó la telaraña de internet. Intenta de nuevo.');
        } finally {
            loadingPrompt.remove();
            renderMessages(messagesArea);
        }
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
