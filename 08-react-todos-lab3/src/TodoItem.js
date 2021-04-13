import React from 'react';
import { TodoStatus } from './todo-model';
import './TodoItem.css';
import PropTypes from 'prop-types';
import {COMPLETED, CANCELED} from './todo-model';

export const TodoItem = ({todo, onChangeStatus, onDeleteTodo}) => {
    function handleChangeStatus(status) {
        onChangeStatus({...todo, status});
    }
    const handleDelete = (event) => {
        onDeleteTodo(todo);
    }
    return (
        <div className="TodoItem">
            <span className="TodoItem-text">
                <span className="TodoItem-id">
                    {todo.id}.
                </span>
                {todo.text}
            </span>
            <span className="TodoItem-right">
                <span className="TodoItem-status">
                    {TodoStatus[todo.status]}
                </span>
                <span className="TodoItem-button pull-right danger fas fa-times-circle" title="Delete Todo"
                    onClick={handleDelete}></span>
                <span className="TodoItem-button pull-right danger fas fa-ban" title="Cancel Todo"
                    onClick={() => handleChangeStatus(CANCELED)}></span>
                <span className="TodoItem-button pull-right fas fa-check-circle" title="Complete Todo"
                    onClick={() => handleChangeStatus(COMPLETED)}></span>
            </span>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        status: PropTypes.oneOf([0, 1, 2, 3])
    }),
    onChangeStatus: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired
}
