// App.js
import './App.css';
import React from 'react';
import KommunicateChat from './chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Chat App</h1>
      </header>
      <main>
        <p>This is the main content area</p>
        <KommunicateChat/>
      </main>
    </div>
  );
}

export default App;
