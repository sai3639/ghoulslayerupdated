import React from "react";
import continueSai from './images/continueSai.png';
import './App.css';
import sai from './images/saii.png';
import x from './images/x.png';
import check from './images/check.png'
import {Link} from 'react-router-dom';

const continueAsSai = () =>{

    return(
        <div className="ContinueAsSai">
            <div className="continue">
                <img src={continueSai} alt="Continue as Sai"/>
                
            </div>
            <div className="saiCon">
                <img src ={sai} alt = "Sai"/>
            </div>
            <div className="select">
            
                <div className="x">
                    <Link to="/playerScreen">
                    <img src ={x} alt ="X"/>
                    </Link>
                </div>
                <div className="check">
                    <Link to="/ghoulScreen">
                    <img src={check} alt ="check"/>
                    </Link>
                </div>

            </div>
          
        </div>
    )
}

export default continueAsSai;