import React, { useState } from 'react';  // Don't forget to import useState
import './App.css';
import Chat from './Chat';
import SignIn from './sign'; // Make sure to match the correct case for filenames

function App() {
  const [username, setUsername] = useState(""); // Store the username

  return (
    <div className="App">
      <h1>Live Chat App</h1>
      {!username ? (
        <SignIn setUsername={setUsername} /> // Show sign-in screen if no username
      ) : (
        <Chat username={username} /> // Show chat if username is set
      )}
    </div>
  );
}

export default App;
