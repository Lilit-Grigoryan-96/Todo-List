import React from 'react'

const ToDoFilters = ({allTodos,filterTodos}) => {
    return (
        <div>
            <button onClick={allTodos} value="all" type="button">All</button>
            <button onClick={filterTodos} value="done" type="button">Done</button>
        </div>
    )
}

export default ToDoFilters;