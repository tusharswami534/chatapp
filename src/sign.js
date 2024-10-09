import React, { useState } from 'react';

function SignIn({ setUsername }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setUsername(name); // Pass the username to the parent
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your username"
        />
        <button type="submit">Join Chat</button>
      </form>
    </div>
  );
}

export default SignIn;
