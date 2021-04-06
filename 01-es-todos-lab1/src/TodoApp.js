import React, { Component } from 'react'
import MOCK_TODOS from './mock-todos'
import { ALL_STATUSES } from './todo.model'
import './TodoApp.css'
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import TodoFilter from './TodoFilter'


export default class TodoApp extends Component {
    state = {
        todos: MOCK_TODOS,
        filter: ALL_STATUSES
    }
    constructor(props) {
        super(props);
        this.handleCreateTodo = this.handleCreateTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleStatusChanged = this.handleStatusChanged.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }
    handleCreateTodo(todo) {
        this.setState(state => 
            ({todos: state.todos.concat(todo)})); // shallow merge of the state delta
    }
    handleDeleteTodo(todo) {
        this.setState(state => ({
            todos: state.todos.filter(t => t.id !== todo.id)
        }));
    }
    handleStatusChanged(todo) {
        this.setState(state => ({
            todos: state.todos.map(t => t.id === todo.id ? todo : t)
        }));
    }
    handleFilterChange(filter) {
        this.setState({filter});
    }
    render() {
        return (
            <div className="TodoApp-header">
                <h2>React TODOs Demo</h2>
                <TodoInput onCreateTodo={this.handleCreateTodo} />
                <TodoFilter filter={this.state.filter}  onFilterChange={this.handleFilterChange} />
                <TodoList todos={this.state.todos} filter={this.state.filter}
                    onDeleteTodo={this.handleDeleteTodo} onStatusChanged={this.handleStatusChanged} />
            </div>
        )
    }
}
