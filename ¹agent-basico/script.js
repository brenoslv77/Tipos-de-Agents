let pendingTopic = null;

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value;
    if (message.trim()!== '') {
        displayMessage('Você:', message, 'user');
        userInput.value = '';
        setTimeout(() => {
            displayMessage('Chatbot:', generateResponse(message), 'bot');
        }, 500);
    }
}


function displayMessage(sender, message, type) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    const senderElement = document.createElement('strong');

    senderElement.textContent = sender;
    messageElement.appendChild(senderElement);
    messageElement.appendChild(
        document.createTextNode(' ' + message)
    );

    messageElement.className =
        type === 'user' ? 'user-message' : 'bot-message';

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


function normalizeMessage(message) {
    return message
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}


function hasNegation(message) {
    const text = normalizeMessage(message);

    const negations = [
        "nao",
        "de jeito nenhum",
        "nem pensar"
    ];

    return negations.some(word => text.includes(word));
}


function identifyIntent(message) {
    const texto = normalizeMessage(message);

    const intents = {
        saudacao: [
            "oi", "ola", "bom dia", "boa tarde", "boa noite", "e ai"
        ],

        iluminacao: [
            "luz", "luzes", "lampada", "lampadas",
            "iluminacao", "iluminar", "acender a luz",
            "apagar a luz", "ligar a lampada",
            "desligar a lampada"
        ],

        climatizacao: [
            "ar-condicionado", "ar condicionado",
            "temperatura", "climatizacao",
            "resfriar", "esfriar", "aquecer",
            "calor", "frio", "ventilador"
        ],

        cortinas: [
            "cortina", "cortinas", "persiana", "persianas",
            "abrir a janela", "fechar a janela"
        ],

        economia: [
            "economizar energia", "consumo de energia",
            "gastar menos energia", "economia de energia",
            "conta de luz", "gastar menos", "economia"
        ]
    };

    // Prioriza expressoes mais especificas
    const priorityIntents = [
        "economia",
        "iluminacao",
        "climatizacao",
        "cortinas",
        "saudacao"
    ];

    for (const intent of priorityIntents) {
        const palavras = intents[intent];

        if (palavras.some(palavra => texto.includes(palavra))) {
            return intent;
        }
    }

    return "desconhecido";
}


function generateResponse(message) {
    const texto = normalizeMessage(message);

    // 1. Verifica se existe uma negacao
    if (hasNegation(texto)) {
        pendingTopic = null;

        return "Tudo bem! Nao vou considerar isso como um pedido para ligar ou alterar dispositivos.";
    }

    // 2. Verifica se o usuario esta respondendo a pergunta anterior
    if (pendingTopic !== null) {
        if (["sim", "s", "quero", "claro", "pode"].includes(texto)) {
            const topic = pendingTopic;
            pendingTopic = null;

            if (topic === "iluminacao") {
                return "A iluminacao automatizada pode usar sensores de presenca, horarios programados ou comandos. Por exemplo, as luzes podem acender quando alguem entra em um ambiente.";
            }
        }

        if (["nao", "n"].includes(texto)) {
            pendingTopic = null;

            return "Tudo bem! Sobre qual outro assunto voce gostaria de conversar: iluminacao, climatizacao, cortinas ou economia de energia?";
        }
    }

    // 3. Identifica a intencao da mensagem
    const intent = identifyIntent(message);

    // 4. Limpa o contexto quando o assunto muda
    if (pendingTopic !== null && intent !== "desconhecido") {
        if (intent !== pendingTopic) {
            pendingTopic = null;
        }
    }

    // 5. Define as respostas para cada intencao
    const responses = {
        saudacao:
            "Ola! Posso ajudar com iluminacao, climatizacao, cortinas e economia de energia. O que voce gostaria de saber?",

        iluminacao:
            "A iluminacao pode ser automatizada por horarios, sensores de presenca ou comandos. Voce quer saber como funciona?",

        climatizacao:
            "A automacao da climatizacao permite controlar a temperatura e programar horarios para o ar-condicionado.",

        cortinas:
            "As cortinas automatizadas podem abrir e fechar em horarios programados ou por comandos.",

        economia:
            "A automacao pode ajudar a economizar energia usando horarios, sensores e controle da iluminacao e climatizacao.",

        desconhecido:
            "Ainda estou aprendendo! Posso ajudar com iluminacao, ar-condicionado, cortinas ou economia de energia."
    };

    // 6. Guarda o contexto quando perguntar sobre iluminacao
    if (intent === "iluminacao") {
        pendingTopic = "iluminacao";
    }

    return responses[intent];
}


const userInput = document.getElementById('user-input');

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
