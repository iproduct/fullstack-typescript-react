import React from 'react';
import PropTypes from 'prop-types';
import { CommentType } from '../../model/comment.model';
import CommentItem from '../CommentItem/CommentItem';

function CommentsList({comments, selected, ...rest}) {
    return (
        <div className="CommentsList">
            {
                comments.map(comm => (
                    <CommentItem key={comm.id} comment={comm} 
                        isActive={selected && selected.id === comm.id} {...rest} />
                ))
            }
        </div>
    )
}


CommentsList.propTypes = {
    comments: PropTypes.arrayOf(CommentType).isRequired,
    selected: CommentType,
    onChangeSelected: PropTypes.func
}

export default CommentsList

