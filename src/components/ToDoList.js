import React from 'react'
import ToDoItem from './ToDoItem'


export default function ToDoList(props) {
    const activeTasks = props.todos.filter(task => !task.done);
    const doneTasks = props.todos.filter(task => task.done);
    return (
        <ul>
            {
                [...activeTasks,...doneTasks].map((todo, index) => {
                        return <ToDoItem todo={todo} key={todo.id} index={index} toggleCheck={props.toggleCheck} removeTodo={props.removeTodo}/>
                })
            }
        </ul>
    )
}