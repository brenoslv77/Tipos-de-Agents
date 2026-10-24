# Agent Básico — Chatbot de Automação Residencial

## Sobre o projeto

O Agent Básico é um projeto de estudo desenvolvido com HTML, CSS e JavaScript para aprender os fundamentos da criação de chatbots.

O chatbot simula um assistente de automação residencial, respondendo a mensagens relacionadas a iluminação, climatização, cortinas e economia de energia.

Este projeto funciona localmente no navegador e utiliza regras programadas em JavaScript. Ele não utiliza um modelo de inteligência artificial nem se conecta a dispositivos físicos.

## Objetivos de aprendizagem

- Construir uma interface de chat com HTML e CSS.
- Manipular elementos da página com JavaScript.
- Receber e exibir mensagens.
- Normalizar textos para facilitar o reconhecimento de palavras.
- Identificar intenções usando palavras-chave.
- Criar respostas diferentes para cada intenção.
- Trabalhar com condicionais, funções, arrays e objetos.
- Introduzir um contexto simples de conversa.
- Praticar testes, depuração e organização de código.

## Tecnologias utilizadas

- **HTML5:** estrutura da página.
- **CSS3:** aparência e layout do chatbot.
- **JavaScript:** lógica de conversa e manipulação da interface.

Não é necessário instalar Node.js ou dependências para executar a versão atual.

## Estrutura do projeto

```text
agent-basico/
├── index.html
├── styles.css
├── script.js
└── README.md
```

### Responsabilidade de cada arquivo

- `index.html`: contém a estrutura da interface, o campo de mensagem, o botão Enviar e as referências aos arquivos CSS e JavaScript.
- `styles.css`: define cores, espaçamentos, dimensões e aparência da interface.
- `script.js`: controla o envio das mensagens, a identificação de intenções e a geração das respostas.
- `README.md`: documenta o objetivo, o funcionamento e as limitações do projeto.

## Como executar

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto no computador.
3. Abra o arquivo `index.html` no navegador.
4. Digite uma mensagem e pressione Enter ou clique em Enviar.

A versão atual não precisa de servidor backend para funcionar.

## Como funciona o chatbot

O fluxo básico de uma mensagem é:

1. O usuário digita uma mensagem.
2. A função `sendMessage()` captura o texto.
3. A função `displayMessage()` apresenta a mensagem na interface.
4. A função `generateResponse()` decide qual resposta será enviada.
5. A função `normalizeMessage()` padroniza o texto.
6. A função `hasNegation()` verifica algumas expressões negativas.
7. A função `identifyIntent()` procura palavras-chave relacionadas às intenções cadastradas.
8. A resposta correspondente é exibida no histórico.

## Principais funções

| Função ou variável | Responsabilidade |
|---|---|
| `sendMessage()` | Captura e envia a mensagem. |
| `displayMessage()` | Exibe mensagens no histórico do chat. |
| `normalizeMessage()` | Converte o texto para minúsculas, remove acentos e espaços externos. |
| `hasNegation()` | Identifica algumas expressões negativas. |
| `identifyIntent()` | Classifica a mensagem por palavras-chave. |
| `generateResponse()` | Controla a lógica da conversa e escolhe a resposta. |
| `pendingTopic` | Armazena o assunto de uma pergunta anterior para tratar uma confirmação. |

## Assuntos reconhecidos

### Saudação

Exemplos:
- `Oi`
- `Bom dia`
- `Olá`

### Iluminação

Exemplos:
- `Quero ligar a lâmpada`
- `Quero apagar a luz`
- `Quero iluminar a sala`

### Climatização

Exemplos:
- `Está muito calor`
- `Quero controlar o ar-condicionado`
- `Quero ajustar a temperatura`

### Cortinas

Exemplos:
- `Quero fechar as cortinas`
- `Quero abrir as persianas`

### Economia de energia

Exemplos:
- `Quero economizar energia`
- `Minha conta de luz está cara`
- `Como reduzir o consumo de energia?`

As frases acima são exemplos de teste. O reconhecimento depende das palavras-chave cadastradas em `script.js`; nem todas as variações de linguagem são compreendidas.

## Limitações conhecidas

- O chatbot utiliza regras e palavras-chave, não compreensão semântica por um modelo de IA.
- Algumas frases podem ser classificadas incorretamente.
- O tratamento de negações é simplificado.
- O contexto da conversa é limitado.
- As respostas são previamente programadas.
- Não existe integração com dispositivos físicos, APIs ou serviços AWS.
- O histórico não é persistido após recarregar a página.

## Segurança

As mensagens devem ser inseridas na interface como texto, sem interpretar conteúdo digitado pelo usuário como HTML.

O projeto é educacional e não deve ser utilizado para controlar dispositivos reais sem uma arquitetura de segurança apropriada.

## Próximas melhorias

- Melhorar o reconhecimento de intenções.
- Criar testes para diferentes mensagens.
- Organizar as respostas e as regras de conversa.
- Desenvolver uma interface de automação residencial interativa no projeto avançado.
- Estudar integrações com modelos de IA e serviços AWS em um projeto separado.

## Aprendizados

Este projeto serve como base para compreender como uma aplicação recebe dados, aplica regras, toma decisões simples e atualiza uma interface.

A próxima etapa será desenvolver o `agent-avancado`, com um painel interativo e comandos capazes de alterar estados simulados de dispositivos.

O `agent-aws` será um projeto independente, voltado à integração com serviços de inteligência artificial e nuvem.
