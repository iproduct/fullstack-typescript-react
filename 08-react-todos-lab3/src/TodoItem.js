import React from 'react'
import { TodoStatus } from './todo-model'
import './TodoItem.css'

export const TodoItem = ({todo}) => {
    return (
        <div className="TodoItem">
            <span className="TodoItem-text">
                <span className="TodoItem-id">
                    {todo.id}.
                </span>
                {todo.text}
            </span>
            <span className="TodoItem-right">
                <span className="TodoItem-status">
                    {TodoStatus[todo.status]}
                </span>
            </span>
        </div>
    )
}
