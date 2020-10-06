import React, { useState } from 'react';
import logo from './logo.svg';
import CommentsList from './components/CommentsList/CommentsList'
import './App.css';

function App() {
  const [comments, setComments] = useState([]);
  const [selected, setSelected] = useState();
  function handleChangeSelected(selectedComment) {
    setSelected(selectedComment);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <CommentsList comments={comments} selected={selected} 
          onChangeSelected={handleChangeSelected} />
      </header>
    </div>
  );
}

export default App;
