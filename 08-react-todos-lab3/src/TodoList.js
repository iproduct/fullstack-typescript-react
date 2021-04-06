import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos}) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (<TodoItem todo={todo} />))}
        </div>
    )
}
