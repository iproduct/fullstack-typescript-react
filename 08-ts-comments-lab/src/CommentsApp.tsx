import React from 'react';
import { Comment } from './model/comments.model';
import MOCK_COMMENTS from './model/mock-comments';
import './CommentsApp.css';
import CommentsList from './components/CommentsList/CommentsList';
import CommentInput from './components/CommentInput/CommentInput';

interface CommentsAppProps {
}
interface CommentsAppState {
  comments: Comment[];
  editedComment: Comment | undefined;
}

class CommentsApp extends React.Component<CommentsAppProps, CommentsAppState> {
  state: CommentsAppState = {
    comments: MOCK_COMMENTS,
    editedComment: undefined,
  }
  render() {
    const editedCommentId = this.state.editedComment ? this.state.editedComment.id : undefined;
    return (
      <div className="App">
        <header className="App-header">
          <CommentInput key={editedCommentId} comment={this.state.editedComment} 
            onSubmit={this.handleCommentSubmit} 
            onCancel={this.handleCommentCancel} />
          <CommentsList comments={this.state.comments} selected={this.state.editedComment}
            onUpdate={this.handleUpdate} 
            onDelete={this.handleDelete} />
        </header>
      </div>
    );
  }

  async componentDidMount() {
    const resp = await fetch('http://localhost:9000/api/comments');
    const comments = await resp.json();
    this.setState({comments});
  }

  handleUpdate = (comment: Comment) => {
    this.setState({editedComment: comment});
  };

  handleDelete = (comment: Comment) => {
    this.setState(({comments}) => ({comments: comments.filter(c => c.id !== comment.id)}))
  };

  handleCommentSubmit = ((comment: Comment) => {
    if(this.state.editedComment){ //Edit
      this.setState(({comments}) => ({comments: comments.map(c => c.id !== comment.id ? c : comment)}))
      this.handleCommentCancel();
    } else { // Create
      this.setState(({comments}) => ({comments: comments.concat(comment)}))
    }  
  });

  handleCommentCancel = () => this.setState({editedComment: undefined});
}

export default CommentsApp;
