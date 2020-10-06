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
    if(comment.id) { //Edit comment
      const edited = await COMMENTS_API.updateComment(comment);
      setComments(comments.map(c => c.id === edited.id ? edited: c));
    } else {
      const newComment = await COMMENTS_API.createComment(comment);
      setComments(comments.concat(newComment));
    }
    resetComment();
  }
  function resetComment(){
    setSelected(new Comment('', ''))
  }
  function handleEditComment(comment) {
    setSelected(comment);
  }
  async function handleDeleteComment(comment) {
    const newComment = await COMMENTS_API.deleteComment(comment.id);
    setComments(comments.filter(c => c.id !== newComment.id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <CommentInput key={selected? selected.id: 0} comment={selected} onSubmitComment={handleSubmitComment}/>
        <CommentsList comments={comments} selected={selected} 
          onChangeSelected={handleChangeSelected} 
          onEditComment={handleEditComment}
          onDeleteComment={handleDeleteComment}
          />
      </header>
    </div>
  );
}

export default App;
