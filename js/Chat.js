const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const chatContainer = document.getElementById('chatContainer');
const toggleChat = document.getElementById('toggleChat');

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText) {
        addMessage(messageText, 'Tú');

        const botResponse = getBotResponse(messageText);
        if (botResponse) {
            addMessage(botResponse, 'Asistente');
        }

        messageInput.value = ''; 
        messagesDiv.scrollTop = messagesDiv.scrollHeight; 
    }
});

messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});

toggleChat.addEventListener('click', () => {
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'flex';
    } else {
        chatContainer.style.display = 'none';
    }
});

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = `${sender}: ${text}`;
    messagesDiv.appendChild(messageDiv);
}

function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage === 'hola') {
        return '¡Hola! ¿Cómo estás?';
    } else if (lowerMessage === '¿qué tal?') {
        return 'Todo bien, gracias. ¿Y tú?';
    } else {
      if(lowerMessage === 'marcas' || lowerMessage === 'autos' || lowerMessage === 'vehiculos' || lowerMessage === 'deportivos'){
        return 'Contamos con una amplia gama de vehiculos en las marcas mas reconocidas'
      }
        return 'Lo siento, no entiendo la pregunta.';
    }
}