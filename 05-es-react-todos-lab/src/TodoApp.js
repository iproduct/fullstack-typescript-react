import React, { Component } from 'react';
import MOCK_TODOS from './mock-todos';
import TodoList from './TodoList';

export class TodoApp extends Component {
    state = {
        todos: MOCK_TODOS,
        filter: undefined
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h2>React TODS Demo</h2>
                <TodoList todos={this.state.todos} />
            </React.Fragment>
        );
    }

}