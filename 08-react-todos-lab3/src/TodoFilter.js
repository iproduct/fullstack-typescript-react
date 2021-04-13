
import React from 'react';
import PropTypes from 'prop-types';

function TodoFilter(props) {
    return (
        <div>
            
        </div>
    )
}

TodoFilter.propTypes = {
    filter: PropTypes.number.isRequired,
    onFilterChange: PropTypes.func.isRequired
}

export default TodoFilter

