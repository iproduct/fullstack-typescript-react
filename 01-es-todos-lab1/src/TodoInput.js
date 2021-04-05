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
            this.handleTodoReset()
        }
    }
    handleTodoReset = event => {
        this.setState({text: ''})
    }
    handleTextChange = event => {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleTodoSubmit}>
                <label htmlFor="todo-text">What to do next?</label>
                <input type="text" id="todo-text" name="todo-text" value={this.state.text}
                    onChange={this.handleTextChange} />
                <button className="button button5" type="submit">Submit</button>
                <button className="button button3" type="reset" onClick={this.handleTodoReset}>Reset</button>
            </form>
        )
    }
}
