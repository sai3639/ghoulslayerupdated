import React from "react";
import './App.css';
import select from './images/select.png';
import your from './images/your.png';
import hero from './images/player.png';
import sai from './images/saii.png';
import chi from './images/chii.png';
import ty from './images/tyyy.png';
import saiText from './images/saiText.png';
import chiText from './images/chiText.png';
import tyText from './images/tyText.png';
import {Link} from 'react-router-dom';






const playerScreen = () =>{

    

    return(
        <div className="playerScreen">
            <div className="select">
                <img src={select} alt = "SELECT"/>
            </div>
            <div className="your">
                <img src={your} alt="YOUR"/>
            </div>
            <div className="hero">
                <img src={hero} alt = "HERO"/>
            </div>

            <div className="Players">
                <div className="Sai">
                    <Link to ="/continueAsSai">
                    <img src ={sai} alt = "Sai"/>
                    <img src={saiText} alt = "Sai"/>
                    </Link>
                    
                </div>

                <div className="Chi">
                    <Link to='/continueAsChi'>
                    <img src={chi} alt = "Chi"/>
                    <img src={chiText} alt = "Chi"/>
                    </Link>
                </div>

                <div className="Ty">
                    <Link to ='/continueAsTy'>
                    <img src={ty} alt = "Ty"/>
                    <img src={tyText} alt = "Ty"/>
                    </Link>
                </div>
          
          


            </div>



        </div>
    )
}

export default playerScreen;