import React from 'react';
import logo from './logo.svg';
import { Hello } from './Hello';
import './App.css';
import { Clock } from './Clock';

interface AppProperties {
  title: string;
}

function App(props: AppProperties ) {
  return (
    <div className="App">
      <header className="App-header">
        <h2>{props.title}</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello compiler="TypeScript" framework="ReactJS" />
        <Clock />
      </header>
    </div>
  );
}

export default App;
