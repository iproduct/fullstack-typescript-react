import React from 'react';
import logo from './logo.svg';
import './App.css';

function App({framework, language}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <h2>
          React TODOS Demo
        </h2>
        <p>Welcome from {framework} and {language}!</p>
      </header>
    </div>
  );
}

export default App;
