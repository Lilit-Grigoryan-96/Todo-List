import React from 'react'

const ToDoItem = ({todo, index, toggleCheck, removeTodo}) => {
    return (
            <li className={`${todo.done ? 'done' : ''} ${todo.status ? 'task-'+todo.status : ''}`}>
                <div className="item-conainer">
                    <p className="item-text">
                        {todo.text}
                    </p>
                    <div className="item-btns">
                        <input type="checkbox" onChange={()=>toggleCheck(todo.id)} checked={todo.done}/>
                        <button onClick={()=>removeTodo(todo.id)} className="close">x</button>
                    </div>
                </div>
            </li>
    )
};
export default ToDoItem;