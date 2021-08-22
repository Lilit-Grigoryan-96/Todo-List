import React from 'react'

export default function ToDoFilters({allTodos,filterTodos}) {
    return (
        <div>
            <button onClick={allTodos} value="all" type="button">All</button>
            <button onClick={filterTodos} value="done" type="button">Done</button>
        </div>
    )
}