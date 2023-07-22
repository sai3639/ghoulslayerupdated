import React from "react";
import { useState } from "react";
import ToDoList from "./toDoList";
import ToDo from "./ToDo";



function AddToDo() {

   

    const [todos, setTodos] = useState([]);


    const updateTodo = (toDoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === toDoId ? newValue : item)))

    }


    //check array for todo and remove from application 
    const removeToDo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !==id)

        setTodos(removeArr)
    }

    

    const completeToDo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>TO DO LIST</h1>
            
            <ToDo
            todos={todos} completeToDo={completeToDo} removeToDo={removeToDo}
            updateTodo={updateTodo}/>
            
            
        </div>
    )



}

export default AddToDo;