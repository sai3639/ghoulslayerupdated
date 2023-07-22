import React from "react";
import { useState, useEffect, useRef } from "react";
import {Link} from 'react-router-dom';



function Add (props, todos){

   
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);
  
    useEffect(() => {
      inputRef.current.focus();
    });
  
    const handleChange = e => {
      setInput(e.target.value);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
  
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
      });
      setInput('');


            




    };


    <form onSubmit={handleSubmit} className='todo-form'>
  
      <>
        <input
          placeholder='Add a todo'
          value={input}
          onChange={handleChange}
          name='text'
          className='todo-input'
          ref={inputRef}
        />
        <button onClick={handleSubmit} className='todo-button'>
          Add todo
        </button>
      </>
    
  </form>

}

export default Add;