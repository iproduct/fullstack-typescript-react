import React from 'react'

export const TodoItem = ({todo}) => {
    return (
        <div className="TodoItem">
            <span className="TodoItem-text">
                <span className="TodoItem-id">
                    {todo.id}
                </span>
                {todo.text}
            </span>
            <span className="TodoItem-right">
                <span className="TodoItem-status">
                    {todo.status}
                </span>
            </span>
        </div>
    )
}
