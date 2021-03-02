import React from 'react'
import { TodoStatus } from './todo-model'
import './TodoItem.css';

export const TodoItem = ({ todo }) => {
    const getStatus = (status) => TodoStatus[status]
    return (
        <div className="TodoItem">
            <span>
                <span className="TodoItem-id">{todo.id}</span>
                {todo.text}
            </span>
            <span className="TodoItem-right">
                <span className="TodoItem-status">{ getStatus(todo.status)}</span>
            </span>
        </div>
    )
}
