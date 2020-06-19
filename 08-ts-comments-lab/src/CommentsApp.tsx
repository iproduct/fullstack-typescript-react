import React from 'react';
import { Comment } from './model/comments.model';
import MOCK_COMMENTS from './model/mock-comments';
import './CommentsApp.css';

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
          <CommentsList comments={this.state.comments} />
        </header>
      </div>
    );
  }
}

export default CommentsApp;
