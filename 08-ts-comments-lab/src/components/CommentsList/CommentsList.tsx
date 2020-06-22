import React, { ReactElement } from 'react';
import { Comment, IdType } from '../../model/comments.model';
import './CommentsList.css';
import { CommentItem } from '../CommentItem/CommentItem';
import { CommentListener } from '../../shared/shared-types';

interface Props {
    comments: Comment[];
    selected: Comment | undefined;
    onUpdate:  CommentListener;
    onDelete:  CommentListener;
}

export default function CommentsList({comments, selected, ...rest}: Props): ReactElement {
    return (
        <div className="CommentsList">
         {comments.map(comm => (<CommentItem key={comm.id} comment={comm} 
            isActive={(selected && selected.id) === comm.id} {...rest}/>)) }
        </div>);
}
