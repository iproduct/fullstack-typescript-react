import React from 'react';
import './App.css';
import Basic from './Basic';
import BasicReduced from './BasicReduced';
import { FriendsList } from './FriendsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        // eslint-disable-next-line react/jsx-no-undef
        <FriendsList />
      </header>
    </div>
  );
}

export default App;
