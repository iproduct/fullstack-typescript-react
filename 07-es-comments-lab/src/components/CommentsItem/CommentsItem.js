import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../../model/comment.model';

function CommentsItem({comment, isActive, onChangeSelected}) {
    return (
        <div className={isActive? 'CommentsItem active': 'CommentsItem'}>
            
        </div>
    )
}

CommentsItem.propTypes = {
    comment: PropTypes.instanceOf(Comment).isRequired,
    isActive: PropTypes.bool,
    onChangeSelected: PropTypes.func
}

CommentsItem.defaultProps = {
    isActive: false
}

export default CommentsItem

