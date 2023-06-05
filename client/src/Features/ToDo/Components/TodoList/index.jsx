import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    List: PropTypes.array
};
TodoList.defaultProps = {
    List: []
}

function TodoList({List}) {
    return (
        <div>
            {List.map(todo=>(
                <h1 key={todo.id}>{todo.name}</h1>
            ))}
        </div>
    );
}

export default TodoList;