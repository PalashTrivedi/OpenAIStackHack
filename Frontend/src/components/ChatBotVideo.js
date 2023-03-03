import React, { useState } from 'react';

// Define the chatbot video component
function ChatbotVideo() {
  return (
    <div>
      <h3>Chatbot</h3>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/o9-ObGgfpEk"
      
        title="Chatbot Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

// Define the chatbot window component
function ChatbotWindow() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWindow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button id='btn' onClick={toggleWindow}>Toggle Chatbot Window</button>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            width: '400px',
            height: '500px',
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            zIndex: 999,
          }}
        >
          <ChatbotVideo />
        </div>
      )}
    </div>
  );
}

export default ChatbotWindow;
