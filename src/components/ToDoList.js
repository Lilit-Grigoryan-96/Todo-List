import React from 'react'
import ToDoItem from './ToDoItem'


const ToDoList = (props) =>{
    const low = props.todos.filter(task => task.status === 'low');
    const normal = props.todos.filter(task => task.status === 'normal');
    const high = props.todos.filter(task => task.status === 'high');
    const todolistItems = [...low,...normal, ...high];
    const activeTasks = todolistItems.filter(task => !task.done);
    const doneTasks = todolistItems.filter(task => task.done);



    return (
        <ul>
            {
                [...activeTasks,...doneTasks].map((todo, index) => {
                // .map((todo, index) => {
                        return <ToDoItem todo={todo} key={todo.id} index={index} toggleCheck={props.toggleCheck} removeTodo={props.removeTodo}/>
                })
            }
        </ul>
    )
};

export default ToDoList;