import React, { Component } from 'react';
import MOCK_TODOS from './mock-todos';
import './TodoApp.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export class TodoApp extends Component {
    state = {
        todos: MOCK_TODOS,
        filter: undefined
    }

    constructor(props) {
        super(props);
        this.handleCreateTodo = this.handleCreateTodo.bind(this);
    }

    render() {
        return (
            <div className='App-header'>
                <h2>React TODS Demo</h2>
                <TodoInput onCreateTodo={this.handleCreateTodo} />
                <TodoList todos={this.state.todos} />
            </div>
        );
    }

    handleCreateTodo(todo) {
        this.setState(state => ({todos: state.todos.concat(todo)}));
    }

}