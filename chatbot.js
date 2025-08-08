/**
 * JK Community Farm Chatbot
 * Specialized chatbot for community farming and food security
 */

class JKFarmChatbot {
    constructor(config = {}) {
        this.apiKey = config.apiKey || 'AIzaSyBAerdEMnzRjwcUfOAphUtoWCGQLQ119jo';
        this.organization = config.organization || 'JK Community Farm';
        this.container = config.container || '#jk-farm-chatbot-container';
        this.characters = this.getFarmCharacters();
        this.currentCharacter = null;
        this.isOpen = false;
        this.messages = [];
        
        this.init();
    }

    getFarmCharacters() {
        return [
            {
                id: 'farmer-sarah',
                name: 'Sarah',
                role: 'Head Farmer',
                photo: 'https://via.placeholder.com/100x100/4CAF50/FFFFFF?text=Sarah',
                label: 'Head Farmer',
                system: "You are Sarah, the head farmer at JK Community Farm. You're passionate about sustainable agriculture, organic farming, and feeding families in need. You have 15 years of farming experience and love teaching others about growing food. Keep answers friendly, educational, and focused on farming, food security, and community service. Mention specific crops, farming techniques, and how the farm helps the community.",
                intro: "Hi there! I'm Sarah, the head farmer here at JK Community Farm. I love growing fresh, organic food for families in need. What would you like to know about our farming practices or how you can get involved?",
                color: '#4CAF50'
            },
            {
                id: 'volunteer-mike',
                name: 'Mike',
                role: 'Volunteer Coordinator',
                photo: 'https://via.placeholder.com/100x100/2196F3/FFFFFF?text=Mike',
                label: 'Volunteer Coordinator',
                system: "You are Mike, the volunteer coordinator at JK Community Farm. You organize volunteer groups, corporate team building events, and field trips. You're enthusiastic about community engagement and love connecting people with meaningful volunteer opportunities. Keep answers encouraging, informative, and focused on volunteer opportunities, team building, and community impact.",
                intro: "Hey! I'm Mike, the volunteer coordinator here. I help organize all our volunteer activities and community events. Want to learn about how you can get involved and make a difference?",
                color: '#2196F3'
            },
            {
                id: 'educator-lisa',
                name: 'Lisa',
                role: 'Education Director',
                photo: 'https://via.placeholder.com/100x100/FF9800/FFFFFF?text=Lisa',
                label: 'Education Director',
                system: "You are Lisa, the education director at JK Community Farm. You run educational programs, field trips, and teach people about food security, healthy eating, and sustainable agriculture. You're passionate about food education and believe it's the foundation for empowering healthy communities. Keep answers educational, inspiring, and focused on food education, nutrition, and learning opportunities.",
                intro: "Hello! I'm Lisa, the education director here. I love teaching people about food security, healthy eating, and sustainable farming. What would you like to learn about today?",
                color: '#FF9800'
            },
            {
                id: 'community-emma',
                name: 'Emma',
                role: 'Community Outreach',
                photo: 'https://via.placeholder.com/100x100/9C27B0/FFFFFF?text=Emma',
                label: 'Community Outreach',
                system: "You are Emma, the community outreach coordinator at JK Community Farm. You work with local food pantries, partner organizations, and community members to ensure fresh food reaches those who need it most. You're passionate about food justice and building strong community partnerships. Keep answers community-focused, informative, and emphasize the impact on local families and food security.",
                intro: "Hi! I'm Emma, the community outreach coordinator. I work with our local food pantries and community partners to ensure fresh, healthy food reaches families in need. How can I help you learn about our community impact?",
                color: '#9C27B0'
            }
        ];
    }

    init() {
        this.createChatbotUI();
        this.attachEventListeners();
        this.loadStyles();
    }

    createChatbotUI() {
        const container = document.querySelector(this.container);
        if (!container) return;

        container.innerHTML = `
            <div id="jk-farm-chatbot" class="jk-farm-chatbot">
                <div class="chatbot-launcher" id="chatbot-launcher">
                    <div class="launcher-icon">
                        <i class="fas fa-seedling"></i>
                    </div>
                    <div class="launcher-text">Ask about our farm!</div>
                </div>
                
                <div class="chatbot-window" id="chatbot-window" style="display: none;">
                    <div class="chatbot-header">
                        <div class="header-info">
                            <div class="character-selector">
                                <select id="character-select">
                                    ${this.characters.map(char => 
                                        `<option value="${char.id}">${char.name} - ${char.role}</option>`
                                    ).join('')}
                                </select>
                            </div>
                        </div>
                        <button class="close-btn" id="close-chatbot">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div class="chatbot-messages" id="chatbot-messages">
                        <div class="welcome-message">
                            <div class="message-avatar">
                                <img src="${this.characters[0].photo}" alt="${this.characters[0].name}">
                            </div>
                            <div class="message-content">
                                <div class="message-text">${this.characters[0].intro}</div>
                                <div class="message-time">${new Date().toLocaleTimeString()}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="chatbot-input">
                        <div class="quick-prompts">
                            <button class="prompt-btn" data-prompt="What crops do you grow?">What crops do you grow?</button>
                            <button class="prompt-btn" data-prompt="How can I volunteer?">How can I volunteer?</button>
                            <button class="prompt-btn" data-prompt="Tell me about food security">Tell me about food security</button>
                        </div>
                        <div class="input-container">
                            <input type="text" id="chatbot-input" placeholder="Ask me about farming, volunteering, or food security...">
                            <button id="send-message">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.currentCharacter = this.characters[0];
    }

    loadStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .jk-farm-chatbot {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 10000;
                font-family: 'Inter', sans-serif;
            }

            .chatbot-launcher {
                background: linear-gradient(135deg, #4CAF50, #45a049);
                color: white;
                padding: 15px 20px;
                border-radius: 50px;
                cursor: pointer;
                box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
                display: flex;
                align-items: center;
                gap: 10px;
                transition: all 0.3s ease;
                min-width: 200px;
            }

            .chatbot-launcher:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 25px rgba(76, 175, 80, 0.4);
            }

            .launcher-icon {
                font-size: 1.5rem;
            }

            .launcher-text {
                font-weight: 500;
            }

            .chatbot-window {
                position: absolute;
                bottom: 80px;
                right: 0;
                width: 350px;
                height: 500px;
                background: white;
                border-radius: 15px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                display: flex;
                flex-direction: column;
                overflow: hidden;
            }

            .chatbot-header {
                background: linear-gradient(135deg, #4CAF50, #45a049);
                color: white;
                padding: 15px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .header-info h3 {
                margin: 0;
                font-size: 1.1rem;
                font-weight: 600;
            }

            .character-selector select {
                background: rgba(255, 255, 255, 0.2);
                border: none;
                color: white;
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 0.9rem;
            }

            .character-selector select option {
                background: white;
                color: #333;
            }

            .close-btn {
                background: none;
                border: none;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                padding: 5px;
            }

            .chatbot-messages {
                flex: 1;
                padding: 20px;
                overflow-y: auto;
                background: #f8f9fa;
            }

            .welcome-message {
                display: flex;
                gap: 10px;
                margin-bottom: 15px;
            }

            .message-avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                overflow: hidden;
                flex-shrink: 0;
            }

            .message-avatar img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .message-content {
                background: white;
                padding: 12px 15px;
                border-radius: 15px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                max-width: 80%;
            }

            .message-text {
                margin-bottom: 5px;
                line-height: 1.4;
            }

            .message-time {
                font-size: 0.8rem;
                color: #666;
            }

            .user-message {
                display: flex;
                justify-content: flex-end;
                margin-bottom: 15px;
            }

            .user-message .message-content {
                background: #4CAF50;
                color: white;
            }

            .chatbot-input {
                padding: 15px 20px;
                background: white;
                border-top: 1px solid #e0e0e0;
            }

            .quick-prompts {
                display: flex;
                gap: 8px;
                margin-bottom: 15px;
                flex-wrap: wrap;
            }

            .prompt-btn {
                background: #f0f0f0;
                border: none;
                padding: 8px 12px;
                border-radius: 20px;
                font-size: 0.8rem;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .prompt-btn:hover {
                background: #4CAF50;
                color: white;
            }

            .input-container {
                display: flex;
                gap: 10px;
            }

            #chatbot-input {
                flex: 1;
                padding: 12px 15px;
                border: 1px solid #e0e0e0;
                border-radius: 25px;
                outline: none;
                font-size: 0.9rem;
            }

            #chatbot-input:focus {
                border-color: #4CAF50;
            }

            #send-message {
                background: #4CAF50;
                color: white;
                border: none;
                padding: 12px 15px;
                border-radius: 50%;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            #send-message:hover {
                background: #45a049;
                transform: scale(1.05);
            }

            .typing-indicator {
                display: flex;
                gap: 5px;
                padding: 10px 15px;
                background: white;
                border-radius: 15px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                max-width: 80%;
            }

            .typing-dot {
                width: 8px;
                height: 8px;
                background: #4CAF50;
                border-radius: 50%;
                animation: typing 1.4s infinite;
            }

            .typing-dot:nth-child(2) { animation-delay: 0.2s; }
            .typing-dot:nth-child(3) { animation-delay: 0.4s; }

            @keyframes typing {
                0%, 60%, 100% { transform: translateY(0); }
                30% { transform: translateY(-10px); }
            }

            @media (max-width: 768px) {
                .chatbot-window {
                    width: 90vw;
                    height: 70vh;
                    right: 5vw;
                    bottom: 100px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    attachEventListeners() {
        const launcher = document.getElementById('chatbot-launcher');
        const window = document.getElementById('chatbot-window');
        const closeBtn = document.getElementById('close-chatbot');
        const input = document.getElementById('chatbot-input');
        const sendBtn = document.getElementById('send-message');
        const characterSelect = document.getElementById('character-select');
        const promptBtns = document.querySelectorAll('.prompt-btn');

        launcher.addEventListener('click', () => this.toggleChatbot());
        closeBtn.addEventListener('click', () => this.toggleChatbot());
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        sendBtn.addEventListener('click', () => this.sendMessage());

        characterSelect.addEventListener('change', (e) => {
            this.currentCharacter = this.characters.find(char => char.id === e.target.value);
            this.addMessage(this.currentCharacter.intro, 'bot');
        });

        promptBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const prompt = btn.dataset.prompt;
                this.addMessage(prompt, 'user');
                this.sendMessageToAI(prompt);
            });
        });
    }

    toggleChatbot() {
        const window = document.getElementById('chatbot-window');
        const launcher = document.getElementById('chatbot-launcher');
        
        if (this.isOpen) {
            window.style.display = 'none';
            launcher.style.display = 'flex';
        } else {
            window.style.display = 'flex';
            launcher.style.display = 'none';
        }
        
        this.isOpen = !this.isOpen;
    }

    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        const time = new Date().toLocaleTimeString();

        if (sender === 'user') {
            messageDiv.className = 'user-message';
            messageDiv.innerHTML = `
                <div class="message-content">
                    <div class="message-text">${text}</div>
                    <div class="message-time">${time}</div>
                </div>
            `;
        } else {
            messageDiv.className = 'welcome-message';
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <img src="${this.currentCharacter.photo}" alt="${this.currentCharacter.name}">
                </div>
                <div class="message-content">
                    <div class="message-text">${text}</div>
                    <div class="message-time">${time}</div>
                </div>
            `;
        }

        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    async sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (!message) return;

        this.addMessage(message, 'user');
        input.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        // Send to AI
        await this.sendMessageToAI(message);
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbot-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'welcome-message typing-indicator-container';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <img src="${this.currentCharacter.photo}" alt="${this.currentCharacter.name}">
            </div>
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Remove typing indicator after response
        setTimeout(() => {
            if (typingDiv.parentNode) {
                typingDiv.remove();
            }
        }, 2000);
    }

    async sendMessageToAI(userMessage) {
        try {
            const systemPrompt = `${this.currentCharacter.system}

You are ${this.currentCharacter.name}, ${this.currentCharacter.role} at ${this.organization}. 

Key information about JK Community Farm:
- We're a 501(c)(3) nonprofit providing fresh, organic food to families in need
- We grow over 771,924 lbs of food annually for local food pantries
- We've provided 617,539 meals to food insecure families
- We've hosted 17,245 volunteers for planting and harvesting
- We're located at 35516 Paxson Road, Purcellville, VA 20132
- We offer volunteer opportunities, corporate team building, and field trips
- We focus on sustainable agriculture and food education

Keep responses friendly, informative, and focused on farming, community service, and food security. Keep answers concise but helpful.`;

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `${systemPrompt}\n\nUser: ${userMessage}\n\n${this.currentCharacter.name}:`
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 300,
                        topP: 0.8,
                        topK: 40
                    }
                })
            });

            const data = await response.json();
            
            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                const aiResponse = data.candidates[0].content.parts[0].text.trim();
                this.addMessage(aiResponse, 'bot');
            } else {
                this.addMessage("I'm sorry, I'm having trouble responding right now. Please try again later.", 'bot');
            }

        } catch (error) {
            console.error('Error sending message to AI:', error);
            this.addMessage("I'm sorry, I'm having trouble connecting right now. Please try again later.", 'bot');
        }
    }
}

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', function() {
    window.jkFarmChatbot = new JKFarmChatbot({
        apiKey: 'AIzaSyBAerdEMnzRjwcUfOAphUtoWCGQLQ119jo',
        organization: 'JK Community Farm'
    });
}); 