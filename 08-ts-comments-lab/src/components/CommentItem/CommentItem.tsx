import * as React from 'react';
import { Comment } from '../../model/comments.model';
import './CommentItem.css';
import { CommentListener } from '../../shared/shared-types';

interface IAppProps {
  comment: Comment;
  onUpdate:  CommentListener;
  onDelete:  CommentListener;
}

export const CommentItem: React.FC<IAppProps> = ({comment, onUpdate, onDelete}) => {
  function handleUpdate(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    onUpdate(comment);
  }

  function handleDelete(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    onDelete(comment);
  }
  return (
    <div className="CommentItem" key={comment.id}>
      <span className="CommentItem-text">
        <span className="CommentItem-id">{comment.id}.</span>
        {comment.text}
      </span>
      <div className="CommentItem-right">
        <span className="CommentItem-status">[{comment.author}]</span>
        <span className="CommentItem-controls">
          <span
            className="CommentItem-button fas fa-edit"
            onClick={handleUpdate}
          ></span>
          <span
            className="CommentItem-button danger fas fa-trash-alt"
            onClick={handleDelete}
          ></span>
        </span>
      </div>
    </div>
  );
};
