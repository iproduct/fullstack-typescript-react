import React from 'react';
import { TodoItem } from './TodoItem';
import './TodoList.css';

export default ({todos}) => (
    <div className="TodoList">
        { todos.map(todo => (<TodoItem todo={todo} key={todo.id} />)) }
    </div>
);