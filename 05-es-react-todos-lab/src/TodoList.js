import React from 'react';
import { ALL_STATUSES } from './todo.model';
import { TodoItem } from './TodoItem';
import './TodoList.css';

const TodoList = ({todos, filter, ...rest}) => (
    <div className="TodoList">
        { todos
            .filter(todo => filter === ALL_STATUSES || todo.status === filter)
            .map(todo => (<TodoItem todo={todo} key={todo.id} {...rest} />)) }
    </div>
);

TodoList.displayName = 'MyTodoList';

export default TodoList;
