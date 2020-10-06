import PropTypes from 'prop-types';

export class Comment {
    id = undefined;
    constructor(author, text){
        this.author = author;
        this.text = text;
    }
}

export const CommentType = PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    author: PropTypes.string
});