import React from "react";
import continueTy from './images/continueTy.png';
import './App.css';
import ty from './images/tyyy.png';
import x from './images/x.png';
import check from './images/check.png'
import {Link} from 'react-router-dom';

const continueAsTy = () =>{

    return(
        <div className="ContinueAsTy">
            <div className="continue">
                <img src={continueTy} alt="Continue as Ty"/>
                
            </div>
            <div className="tyCon">
                <img src ={ty} alt = "Ty"/>
            </div>
            <div className="select">
            
                <div className="x">
                    <Link to="/playerScreen">
                    <img src ={x} alt ="X"/>
                    </Link>
                </div>
                <div className="check">
                    <Link to ="/ghoulScreen">
                    <img src={check} alt ="check"/>
                    </Link>
                </div>

            </div>
          
        </div>
    )
}

export default continueAsTy;