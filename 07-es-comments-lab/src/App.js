import React, { useState, useEffect } from 'react';
import CommentsList from './components/CommentsList/CommentsList';
import COMMENTS_API from './service/comments-api-client';
import './App.css';
import CommentInput from './components/CommentInput/CommentInput';


function App() {
  const [comments, setComments] = useState([]);
  const [selected, setSelected] = useState();
  useEffect(() => {
    async function fetchData() {
      setComments(await COMMENTS_API.getAllComments());
    }
    fetchData();
  }, [])
  function handleChangeSelected(selectedComment) {
    setSelected(selectedComment);
  }
  async function handleSubmitComment(comment) {
    const newComment = await COMMENTS_API.createComment(comment);
    setComments(comments.concat(newComment));
  }
  return (
    <div className="App">
      <header className="App-header">
        <CommentInput  onSubmitComment={handleSubmitComment}/>
        <CommentsList comments={comments} selected={selected} 
          onChangeSelected={handleChangeSelected} />
      </header>
    </div>
  );
}

export default App;
