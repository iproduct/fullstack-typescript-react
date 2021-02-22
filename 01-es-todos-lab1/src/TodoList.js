import React from 'react'
import { ALL_STATUSES } from './todo.model'
import { TodoItem } from './TodoItem'

export default function TodoList({todos, filter, ...rest}) {
    return (
        <div>
            {
                todos.filter(todo => filter === ALL_STATUSES || todo.status === filter)
                .map(todo => (<TodoItem todo={todo} key={todo.id} {...rest} />))
            }
        </div>
    )
}
