import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000'); // Connect to backend

function Chat({ username }) {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('sendMessage', { message, username }); // Send message and username
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on('receiveMessage', (data) => {
      setChat((prevChat) => [...prevChat, data]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-window">
        {chat.map((data, index) => (
          <div key={index} className="message">
            <strong>{data.username}: </strong> {data.message}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
