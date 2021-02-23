import React, { Component } from 'react'
import MOCK_TODOS from './mock-todos'
import './TodoApp.css'
import TodoList from './TodoList'

export default class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp-header">
                <h2>React TODOs Demo</h2>
                <TodoList todos={MOCK_TODOS} />
            </div>
        )
    }
}
