import React from 'react';
import { CANCELED, COMPLETED, TodoStatus } from './todo.model';
import './TodoItem.css';

export const TodoItem = ({ todo, onDeleteTodo, onStatusChanged }) => {
    function handleChangeStatus(newStatus) {
        const newTodo = {...todo, status: newStatus}
        onStatusChanged(newTodo);
    }
    function handleDelete() {
        onDeleteTodo(todo);
    }
    return (
        <div className="TodoItem">
            <span className="TodoItem-text">
                <span className="TodoItem-id">
                    {todo.id}
                </span>
                {todo.text}
            </span>
            <span className="TodoItem-right">
                <span className="TodoItem-status">{TodoStatus[todo.status]}</span>
                <span className="TodoItem-button fas fa-check-circle" title="Complete Todo"
                    onClick={() => handleChangeStatus(COMPLETED)}></span>
                <span className="TodoItem-button danger fas fa-ban" title="Cancel Todo"
                    onClick={() => handleChangeStatus(CANCELED)}></span>
                <span className="TodoItem-button danger fas fa-times-circle" title="Delete Todo"
                    onClick={handleDelete}></span>
            </span>
        </div>
    );
}