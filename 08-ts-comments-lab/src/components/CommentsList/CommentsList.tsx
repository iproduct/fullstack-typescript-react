import React, { ReactElement } from 'react';
import { Comment } from '../../model/comments.model';
import './CommentsList.css';
import { CommentItem } from '../CommentItem/CommentItem';
import { CommentListener } from '../../shared/shared-types';

interface Props {
    comments: Comment[];
    onUpdate:  CommentListener;
    onDelete:  CommentListener;
}

export default function CommentsList({comments, ...rest}: Props): ReactElement {
    return (
        <div className="CommentsList">
         {comments.map(comm => (<CommentItem comment={comm} {...rest}/>)) }
        </div>);
}
