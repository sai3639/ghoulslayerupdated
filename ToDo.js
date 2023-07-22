import React from "react";
import { useState } from "react";
import ToDoList from "./toDoList";
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';






const ToDo = ({todos, completeToDo, removeToDo, updateTodo}) => {

    const[edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null, 
            value: ''
        })
    }

    if (edit.id) {
        return <ToDoList edit={edit} onSubmit={submitUpdate}>

        </ToDoList>
    }



  return todos.map((todo, index) => (
    //check if to do is complete or not
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key ={index}>

        <div key={todo.id} onClick={() => completeToDo(todo.id)}>
            {todo.text}
        </div>
        <div className = 'icons'>
            <RiCloseCircleLine 
            onClick={() => removeToDo(todo.id)}
            className = 'delete-icon'/>
            <TiEdit onClick={() => setEdit({id:todo.id, value: todo.text})}
            className='edit-icon'/>


        </div>

    </div>
  ));
}

export default ToDo;
