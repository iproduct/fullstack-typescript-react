import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Todo } from './todo.model';

export default class TodoInput extends Component {
    static propTypes = {
        onCreateTodo: PropTypes.func.isRequired
    }

    state = {
        text: ''
    };

    render() {
        return (
            <form className="container" onSubmit={this.handleTodoSubmit}>
                <label htmlFor="todo-text">What to do next?</label>
                <input type="text" id="todo-text" name="todo-text" value={this.state.text}
                    onChange={this.handleTextChanged} />
                    <button className="button button5" type="submit">Submit</button>                
                    <button className="button button3" type="reset" onClick={this.handletodoReset}>
                        Reset
                    </button>
            </form>
        )
    }

    handleTextChanged = (event) => {
        this.setState({ text: event.target.value })
    }

    handleTodoSubmit = (event) => {
        event.preventDefault();
        const text = this.state.text.trim();
        if (text.length > 0) {
            this.props.onCreateTodo(new Todo(text));
            this.setState({ text:'' })
        }
    }
    handletodoReset = () => {
        this.setState({ text:'' })
    }
}
