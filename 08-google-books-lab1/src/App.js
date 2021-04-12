import './App.css';
import React from 'react';
import Nav from './components/Nav/Nav'

function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className="section no-pad-bot">
        <div className="container">
          <h1>Your Favourite Books</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
