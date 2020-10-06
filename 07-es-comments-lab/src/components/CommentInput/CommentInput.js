import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../../model/comment.model';

function CommentInput({comment = new Comment('',''), onSubmitComment}) {
    const [values, setValues] = useState(comment);
    function updateValue(event) {
        setValues({...values, 
            [event.target.name]: 
                event.target.type === 'checkbox' ? event.target.checked : event.target.value
        });
    }
    function handleReset(ev) {
        ev.preventDefault();
        setValues(comment);
    }    
    function handleSubmit(ev) {
        ev.preventDefault();
        onSubmitComment(values);
    }
    return (
        <Fragment>
        <h2>{comment.id ? 'Edit Comment': 'Add New Comment'}</h2>
        <form className="container" onSubmit={handleSubmit} onReset={handleReset}>
            <input type="text" id="text" name="text" value={values.text} onChange={updateValue} 
                placeholder="Comment text here ..." />
            <input type="text" id="author" name="author" value={values.author} onChange={updateValue} 
                placeholder="Author here ..."/>
            <button className="button button5" type="submit">
                {comment.id ? 'Edit Comment': 'Add Comment'}
            </button>
            <button className="button button3" type="reset" >
                Reset
            </button>
        </form>
        </Fragment>
    )
}

CommentInput.propTypes = {

}

export default CommentInput

