import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

export default class App extends React.Component {
  state = { framework: 'ReactJS' };
  constructor() {
    super();
    this.setFramework = this.setFramework.bind(this);
    setTimeout(this.setFramework, 3000, 'Angular');
    setTimeout(this.setFramework, 6000, 'Vue.js');
  }

  setFramework(name) {
    this.setState({ framework: name });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello React from NPMG!!!
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn {this.state.framework}!
        </a>
        </header>
      </div>
    );
  }
}