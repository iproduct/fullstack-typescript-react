import * as React from 'react';
import { Comment } from '../../model/comments.model';
import './CommentItem.css';
import { CommentListener } from '../../shared/shared-types';
import { Marked } from '@ts-stack/markdown';

interface IAppProps {
  comment: Comment;
  isActive: boolean;
  onUpdate:  CommentListener;
  onDelete:  CommentListener;
}

const rawMarkup = (markdownText: string) => (
  {__html :Marked.parse(markdownText)}
);


export const CommentItem: React.FC<IAppProps> = ({comment, isActive, onUpdate, onDelete}) => {
  function handleUpdate(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    onUpdate(comment);
  }

  function handleDelete(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    onDelete(comment);
  }
  return (
    <div className={isActive? 'CommentItem active': 'CommentItem'}>
      <div className="CommentItem-left">
        <span className="CommentItem-id">{comment.id}.</span>
        <span className="CommentItem-text" dangerouslySetInnerHTML={rawMarkup(comment.text)} />
      </div>
      <div className="CommentItem-right">[
        <span className="CommentItem-author">{comment.author}</span>]
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
