import React,{useState} from 'react'

export default function ToDoForm({addToDo}) {
    const [value,setValue] = useState('');
    const [options,setoptions] = useState('');
    function handleSubmit(event) {
        event.preventDefault();
        addToDo(value,options);

        setValue('');
    }

    return (
       <form onSubmit={handleSubmit} className="todo-form">
           <input type="text" value={value} onChange={event => {setValue(event.target.value)}}/>
           <select  onChange={event => {setoptions(event.target.value);}}>
               <option value="low">low</option>
               <option value="normal">normal</option>
               <option value="high">high</option>
           </select>
           <button type="submit" className="todo-btn">Add</button>
       </form>
    )
}