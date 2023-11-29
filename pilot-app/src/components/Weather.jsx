import React, { useState } from 'react';

const WeatherAssistant = () => {
  const [recognition, setRecognition] = useState(null);
  const [inputText, setInputText] = useState('');

  const startVoiceRecognition = () => {
    const newRecognition = new window.webkitSpeechRecognition();
    newRecognition.onresult = handleRecognitionResult;
    newRecognition.start();
    setRecognition(newRecognition);
  };

  const stopVoiceRecognition = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  const handleRecognitionResult = (event) => {
    const transcript = event.results[0][0].transcript;
    addMessage('user', transcript);
    sendMessage(transcript);
  };

  const sendMessage = (text) => {
    addMessage('user', text);

    // Send user message to the server
    fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: text, sessionId: 'unique-session-id' }),
    })
      .then(response => response.json())
      .then(data => {
        addMessage('bot', data.message);
      });
  };

  const addMessage = (sender, text) => {
    const chatContainer = document.getElementById('chat');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.textContent = text;
    chatContainer.appendChild(messageElement);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendButtonClick = () => {
    sendMessage(inputText);
    setInputText('');
  };

  return (
    <div id="chat-container">
      <div id="chat"></div>
      <input type="text" id="messageInput" placeholder="Type a message..." value={inputText} onChange={handleInputChange} />
      <button onClick={handleSendButtonClick}>Send</button>
      <button onClick={startVoiceRecognition}>Start Voice Recognition</button>
      <button onClick={stopVoiceRecognition}>Stop Voice Recognition</button>
    </div>
  );
};

export default WeatherAssistant;
