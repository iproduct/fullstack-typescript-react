import React from 'react';
import { Comment } from './model/comments.model';
import MOCK_COMMENTS from './model/mock-comments';
import './CommentsApp.css';
import CommentsList from './components/CommentsList/CommentsList';

interface CommentsAppProps {
}
interface CommentsAppState {
  comments: Comment[];
}

class CommentsApp extends React.Component<CommentsAppProps, CommentsAppState> {
  state = {
    comments: MOCK_COMMENTS,
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CommentsList comments={this.state.comments} 
            onUpdate={this.handleUpdate} 
            onDelete={this.handleDelete} />
        </header>
      </div>
    );
  }

  handleUpdate = (comment: Comment) => {
    // this.setState(({comments}) => ({}))
  }

  handleDelete = (comment: Comment) => {
    this.setState(({comments}) => ({comments: comments.filter(c => c.id !== comment.id)}))
  }
}

export default CommentsApp;
