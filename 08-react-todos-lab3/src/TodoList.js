import React from 'react'
import { ALL_STATUSES } from './todo-model'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, filter, ...rest}) => {
    return (
        <div className="TodoList">
            {todos.filter(t => filter === ALL_STATUSES || t.status === filter)
            .map(todo => (<TodoItem todo={todo} key={todo.id} {...rest} />))}
        </div>
    )
}
