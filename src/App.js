import React,{useState} from 'react'
import './App.css';
import  "./components/ToDo.css";
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'
import ToDoFilters from './components/ToDoFilters'


function App() {
  let tasks = [
    {id:1, text: 'task 1', status: 'low', done: true},
    {id:2, text: 'task 2', status: 'normal', done: true},
    {id:3, text: 'task 3', status: 'high', done: false},
  ];

  const [todos, setTodos] = useState(tasks);

  function toggleCheck(id) {
    setTodos(
        todos.map(task=>{
          if(task.id===id){
            task.done=!task.done;
          }
          return task;
        })
    )
  }
  function removeTodo(id) {
    setTodos (todos.filter(todo => todo.id !== id))
  }
  
  function addToDo(task, status) {
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
  }
  function filterTodos(e) {

    setTodos(todos.filter(todo => todo.done === true));
  }
  function allTodos(e) {
      setTodos(tasks);
      return;
  }

  function saveOnlocalStorage() {
    const term = JSON.stringify(todos);
    localStorage.setItem("todos", term);
  }


  return (
    <div className="App todo-app">
      <ToDoForm addToDo={addToDo}/>
      {
        [todos].length ? <ToDoList todos={todos} toggleCheck={toggleCheck} removeTodo={removeTodo}/> :
            <p className="empty">The list is empty</p>
      }
      <ToDoFilters filterTodos={filterTodos} allTodos={allTodos}/>
      <button onClick={()=>saveOnlocalStorage()} className="save">SAVE</button>
    </div>
  );
}

export default App;
