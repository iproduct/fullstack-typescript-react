import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Todo } from './todo-model'

export default class TodoInput extends Component {
    static propTypes = {
        onCreateTodo: PropTypes.func.isRequired
    }
    state = {
        text: ''
    }
    constructor(props) {
        super(props);
        this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleTodoSubmit(event) {
        event.preventDefault();
        const text = this.state.text.trim();
        if(text === '') return;
        this.props.onCreateTodo(new Todo(text));
        this.setState({text: ''});
    }

    handleTextChange(event) {
        this.setState({text: event.target.value})
    }

    handleReset(event) {
        this.setState({ text: ''})
    }

    render() {
        return (
            <form className="TodoInput-form" onSubmit={this.handleTodoSubmit}>
                <label htmlFor="TodoInput-text">
                    What to do next?
                </label>
                <input type="text" id="TodoInput-text" name="TodoInput-text" value={this.state.text}
                    onChange={this.handleTextChange} />
                <button type="submit" className="button button1">Submit</button>
                <button type="reset" className="button button3" onClick={this.handleReset}>Reset</button>
            </form>
        )
    }
}
