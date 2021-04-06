import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, ...rest}) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (<TodoItem todo={todo} {...rest} />))}
        </div>
    )
}
