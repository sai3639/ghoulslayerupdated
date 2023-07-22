import React from "react";
import { useState, useEffect, useRef } from "react";



function ToDoList (props){

    const[input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })


    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
        
    };


    return(
        <form className="toDoForm" onSubmit={handleSubmit}>
            {props.edit ? ( 
            <>
            <input
                type='text'
                placeholder='Update your item'
                value={input}
                name='text'
                className='toDoInput edit'
                onChange={handleChange}
                ref ={inputRef}
            />
            <button className="toDoButton edit">Update</button> 
            </>):
            ( 
            <>
            <input
                type='text'
                placeholder='Add ToDo'
                value={input}
                name='text'
                className='toDoInput'
                onChange={handleChange}
                ref ={inputRef}
            />
            
            <button className="toDoButton">Add To DO</button>
            </>)
            }
            
           
        </form>


    )
}

export default ToDoList;