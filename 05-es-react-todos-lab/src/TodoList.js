import React from 'react';
import { TodoStatus } from './todo.model';

export default ({todos}) => (
    <ul>
        { todos.map(todo => (<li>{todo.id}: {todo.text} - {TodoStatus[todo.status]}</li>)) }
    </ul>
);