import React from "react";
import continueChi from './images/continueChi.png';
import './App.css';
import chi from './images/chii.png';
import x from './images/x.png';
import check from './images/check.png'
import {Link} from 'react-router-dom';

const continueAsChi = () =>{

    return(
        <div className="ContinueAsChi">
            <div className="continue">
                <img src={continueChi} alt="Continue as Chi"/>
                
            </div>
            <div className="chiCon">
                <img src ={chi} alt = "Chi"/>
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

export default continueAsChi;