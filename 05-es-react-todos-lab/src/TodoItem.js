import React from 'react';
import { TodoStatus } from './todo.model';
import './TodoItem.css';

export const TodoItem = ({ todo }) => (
    <div className="TodoItem">
        <span className="TodoItem-text">
            <span className="TodoItem-id">
                {todo.id}
            </span>
            {todo.text}
        </span> 
        <span className="TodoItem-right">
            { TodoStatus[todo.status] }
        </span>
    </div>
);