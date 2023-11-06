import { useState, useEffect } from 'react';
import { Divider, Layout, Row, Space, Spin } from "antd";

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator,
} from '@chatscope/chat-ui-kit-react';

const API_KEY = "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"

const Chatbot = () => {
    const [messages, setMessages] = useState([
        {
            message: "Hello, I'm ChatGPT! Ask me anything!",
            sentTime: "just now",
            sender: "ChatGPT",
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);

    const handleSendRequest = async (message) => {
        const newMessage = {
            message,
            direction: 'outgoing',
            sender: "user",
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setIsTyping(true);

        try {
            const response = await processMessageToChatGPT([...messages, newMessage]);
            const content = response.choices[0]?.message?.content;
            if (content) {
                const chatGPTResponse = {
                    message: content,
                    sender: "ChatGPT",
                };
                setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
            }
        } catch (error) {
            console.error("Error processing message:", error);
        } finally {
            setIsTyping(false);
        }
    };

    async function processMessageToChatGPT(chatMessages) {
        const apiMessages = chatMessages.map((messageObject) => {
            const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
            return { role, content: messageObject.message };
        });

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                { role: "system", content: "Soy un marketero profesional" },
                ...apiMessages,
            ],
        };

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(apiRequestBody),
        });

        return response.json();
    }

    return (
        <div className="App">
            <div style={{ position: "relative", height: "600px", width: "100%" }}>
                <div className='m-4 flex'>
                    <a id="toast-simple" class="m-2 cursor flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert" onClick={() => { handleSendRequest("Creame 10 asuntos de mailings en base a mi información obtenida") }}>
                        <svg class="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9" />
                        </svg>
                        <div class="pl-4 text-sm font-normal">Creame 10 asuntos para mailings.</div>
                    </a>
                    <a id="toast-simple" class="m-2 cursor flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert" onClick={() => { handleSendRequest("Creame 5 anuncios para facebook en base a mi información obtenida") }}>
                        <svg class="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9" />
                        </svg>
                        <div class="pl-4 text-sm font-normal">Creame 5 anuncios para facebook.</div>
                    </a>
                    <a id="toast-simple" class="m-2 cursor flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert" onClick={() => { handleSendRequest("Creame 10 asuntos de mailings en base a mi información obtenida") }}>
                        <svg class="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9" />
                        </svg>
                        <div class="pl-4 text-sm font-normal">Escribeme guiones para una historia corta en Instagram.</div>
                    </a>
                </div>

                <MainContainer>
                    <ChatContainer>
                        <MessageList
                            scrollBehavior="smooth"
                            typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
                        >
                            {messages.map((message, i) => {
                                console.log(message)
                                return <Message key={i} model={message} />
                            })}
                        </MessageList>
                        <MessageInput placeholder="Send a Message" onSend={handleSendRequest} />
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>
    )
}

export default Chatbot;