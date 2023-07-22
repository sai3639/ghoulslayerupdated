import React from "react";
import title from './images/title.png';
import './App.css';
import startButton from './images/startButton.png';
import {Link} from 'react-router-dom';


const Home = () =>{
    
    return(
        <div className="Home">
          
                <div className = "title">
                    <img
                    src ={title}
                    alt = "Ghoul Slayer"    
                    />
                    
                </div>
                <div className = "startButton">
                    <Link to ='/playerScreen'>
                        <img src = {startButton} alt = "START"/>
                    </Link>
                </div>
               
        </div>
    )
       
}

export default Home;
