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
  state = {
    comments: MOCK_COMMENTS,
    editedComment: undefined,
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CommentInput comment={this.state.editedComment} onCreate={this.handleCommentCreate} />
          <CommentsList comments={this.state.comments} 
            onUpdate={this.handleUpdate} 
            onDelete={this.handleDelete} />
        </header>
      </div>
    );
  }

  handleUpdate = (comment: Comment) => {
    this.setState({editedComment: comment});
  }

  handleDelete = (comment: Comment) => {
    this.setState(({comments}) => ({comments: comments.filter(c => c.id !== comment.id)}))
  }

  handleCommentCreate = ((comment: Comment) => {
    this.setState(({comments}) => ({comments: comments.concat(comment)}))
  })
}

export default CommentsApp;
