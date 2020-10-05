import React from 'react';
import { TodoItem } from './TodoItem';
import './TodoList.css';

const TodoList = ({todos, ...rest}) => (
    <div className="TodoList">
        { todos.map(todo => (<TodoItem todo={todo} key={todo.id} {...rest} />)) }
    </div>
);

TodoList.displayName = 'MyTodoList';

export default TodoList;
