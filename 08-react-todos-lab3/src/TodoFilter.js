
import React from 'react';
import PropTypes from 'prop-types';
import { ACTIVE, ALL_STATUSES, CANCELED, COMPLETED } from './todo-model';
import './TodoFilter.css';

export function TodoFilter({filter, onFilterChange}) {
    function handleFilterChange(event) {
        onFilterChange(+event.target.value);
    }
    return (
        <select className="TodoFilter" value={filter} onChange={handleFilterChange}>
            <option value={ALL_STATUSES}>All</option>
            <option value={ACTIVE}>Active</option>
            <option value={COMPLETED}>Completed</option>
            <option value={CANCELED}>Canceled</option>
        </select>
    )
}

TodoFilter.propTypes = {
    filter: PropTypes.number.isRequired,
    onFilterChange: PropTypes.func.isRequired
}

export default TodoFilter

