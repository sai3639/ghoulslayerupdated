import React from "react";
import { useState } from "react";
import {addToDo} from './Popup';
import Popup from "./Popup";
import { json, useLocation } from "react-router-dom";
import {ghoul1} from "./ghoulScreen";


function List(){

    const location = useLocation()
   
        

    const str = sessionStorage.getItem('list')
    const parsedObject = JSON.parse(str)

    
  


   
   
    


    return(
        <div>{location.state.li}</div>
        
    )
}


export default List;