import React,{useState, useEffect} from 'react'
import  "./ToDo.css";
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'
import ToDoFilters from './ToDoFilters'


function ToDoApp() {
    // let tasks = [
    // {id:1, text: 'task 1', status: 'low', done: true},
    // {id:2, text: 'task 2', status: 'normal', done: true},
    // {id:3, text: 'task 3', status: 'high', done: false},
    // ];

    const [todos, setTodos] = useState([]);

    const toggleCheck = (id) => {
        setTodos(
            todos.map(task=>{
                if(task.id===id){
                    task.done=!task.done;
                }
                return task;
            })
        )
    };
    const removeTodo = (id) => {
        setTodos (todos.filter(todo => todo.id !== id))
    };

    const addToDo = (task, status) =>{
        setTodos(
            todos.concat([
                {
                    text:task,
                    id: Date.now(),
                    status: status,
                    done: false
                }
            ])
        )
    };
    const filterTodos = (e) =>{
        setTodos(todos.filter(todo => todo.done === true));
    };

    const allTodos = (e) => {
        let getItem = localStorage.getItem("todos");
        setTodos(JSON.parse(getItem));
    };

    const saveOnlocalStorage = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    useEffect(() =>{
        let getItem = localStorage.getItem("todos");
        setTodos(JSON.parse(getItem));
    },[]);

    return (
        <div className="todo-app">
            <ToDoForm addToDo={addToDo}/>
            {
                [todos].length ? <ToDoList todos={todos} toggleCheck={toggleCheck} removeTodo={removeTodo}/> :
                    <p className="empty">The list is empty</p>
            }
            <ToDoFilters filterTodos={filterTodos} allTodos={allTodos}/>
            <button className="save" onClick={()=>saveOnlocalStorage()}>SAVE</button>
        </div>
    );
}

export default ToDoApp;
