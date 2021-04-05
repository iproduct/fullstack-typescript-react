import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Todo } from './todo.model';

export default class TodoInput extends Component {
    static propTypes = {
        onCreateTodo: PropTypes.func.isRequired
    };

    state = {
        text: ''
    };

    handleTodoSubmit = event => {
        event.preventDefault();
        const text = this.state.text.trim();
        if(text.length > 0) {
            this.props.onCreateTodo(new Todo(text));
        }
    }

    render() {
        return (
            <form className="container" onSubmit="this.handleTodoSubmit">
                
            </form>
        )
    }
}
