import React, { useState } from 'react';

const VoiceAssistant = () => {
  const [recognition, setRecognition] = useState(null);

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

    // Send user message to the server
    fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: transcript, sessionId: 'unique-session-id' }),
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

  return (
    <div id="chat-container">
      <div id="chat"></div>
      <button onClick={startVoiceRecognition}>Start Voice Recognition</button>
      <button onClick={stopVoiceRecognition}>Stop Voice Recognition</button>
    </div>
  );
};

export default VoiceAssistant;
