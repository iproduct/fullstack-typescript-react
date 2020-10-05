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
                <TodoList todos={this.state.todos} onDeleteTodo={this.handleDeleteTodo}
                    onStatusChanged={this.handleChangeStatus}/>
            </div>
        );
    }

    handleCreateTodo(todo) {
        this.setState(state => ({todos: state.todos.concat(todo)}));
    }

    handleDeleteTodo = (todo) => {
        this.setState(state => ({
            todos: state.todos.filter(t => t.id !== todo.id)
        }))
    }

    handleChangeStatus = (todo) => {
        this.setState(state => ({
            todos: state.todos.map(t => t.id === todo.id ? todo : t)
        }))
    }

}