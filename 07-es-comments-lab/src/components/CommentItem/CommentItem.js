import React from 'react';
import PropTypes from 'prop-types';
import { CommentType } from '../../model/comment.model';
import { Marked } from '@ts-stack/markdown';
import './CommentItem.css';

function rawMarkup(markdownText) {
    return {
        __html: Marked.parse(markdownText)
    };
}

function CommentItem({comment, isActive, onChangeSelected, onEditComment, onDeleteComment}) {
    function handleUpdate(){
        onEditComment(comment);
    }
    function handleDelete(){
        onDeleteComment(comment);
    }
    return (
        <div className={isActive? 'CommentItem active': 'CommentItem'}>
            <div className="CommentItem-left">
                <span className="CommentItem-id">{comment.id}</span>
                <span className="CommentItem-text" dangerouslySetInnerHTML={rawMarkup(comment.text)}></span>
            </div>
            <div className="CommentItem-right">
                <span className="CommentItem-author">{comment.author}</span>
                <span className="CommentItem-controls">
                    <span className="CommentItem-button fas fa-edit" onClick={handleUpdate}></span>
                    <span className="CommentItem-button fas fa-trash-alt" onClick={handleDelete}></span>
                </span>
            </div>
        </div>
    );
}

CommentItem.propTypes = {
    comment: CommentType.isRequired,
    isActive: PropTypes.bool,
    onChangeSelected: PropTypes.func
}

CommentItem.defaultProps = {
    isActive: false
}

export default CommentItem

