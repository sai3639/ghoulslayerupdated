import React from "react";
import './Popup.css';
import { useState, useRef, useEffect } from "react";
import Add from './add';
import {json, Link, useLocation, useNavigate} from 'react-router-dom';
import List from './List';



function Popup(props) {

  const [list, setList] = useState([])


    // useEffect(()=>{
    //   localStorage.setItem("list", JSON.stringify(list));
    // }, [list]);
   
    const [input, setInput] = useState("");
    const navigate = useNavigate();
  
    const addToDo = (todo) => {
      
        if(todo.text === ""){
            return;
        }
      
      const newTodo = {
        id: Math.random(),
        todo: todo,
      };

     
  
      // add the todo to the list
      setList([...list, newTodo]);

      const jsonObject = JSON.stringify(list)
      sessionStorage.setItem('list', jsonObject)


       const str = sessionStorage.getItem('list')
       const parsedObject = JSON.parse(str)
   
  
      // clear input box
      setInput("");
      navigate('/List',{ state: {li: todo}})
     
      

     
    };
    
  

    

    return  (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <input
                   placeholder='Add a to do'
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                
              
        
                   
                <button onClick={() => addToDo(input)}>Add</button>
                
                
                <button className="close" onClick={() =>props.setTrigger(false)}>close</button>
              
              
            </div>
        </div>
    ) : '';
}

export default Popup;
