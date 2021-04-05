import React, { Component } from 'react'
import MOCK_TODOS from './mock-todos'
import { ALL_STATUSES } from './todo.model'
import './TodoApp.css'
import TodoList from './TodoList'

export default class TodoApp extends Component {
    state = {
        todos: MOCK_TODOS,
        filter: ALL_STATUSES
    }
    constructor(props) {
        super(props);
        this.handleCreateTodo = this.handleCreateTodo.bind(this);
    }
    handleCreateTodo(todo) {
        this.state.todos.setState(state => 
            ({todos: state.todos.concat(todo)})); // shallow merge of the state delta
    }
    render() {
        return (
            <div className="TodoApp-header">
                <h2>React TODOs Demo</h2>
                <TodoList todos = {MOCK_TODOS} filter={ALL_STATUSES} />
            </div>
        )
    }
}
