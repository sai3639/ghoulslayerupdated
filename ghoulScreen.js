import React from "react";
import ghoulDiff from './images/ghouldiff.png';
import orbButton from './images/orbButton.png';
import ghoulButton from './images/ghoulButton.png';
import kingButton from './images/kingButton.png';
import {Link} from 'react-router-dom';
import noGhoul from './images/noGhoulReal.png';
import Popup from './Popup';
import { useState } from "react";


const GhoulScreen = () => {
    
    
    const [buttonPopup, setButtonPopup] = useState(false);
    const [ghoul1, setGhoul] = useState(false);

    return (
        
        <div className="ghoulDiff">
            <img src = {ghoulDiff} alt = "Ghoul Difficulty"/>
            <div className="buttons">
                <div className="orb">
                    
                    <img src = {orbButton} alt ="Orb Button"
                    onClick={() => setButtonPopup(true)}/>
                    
                  
                </div>

                <div className="ghoul">
                    <Link to ="/List">
                    <img src={ghoulButton} alt = "Ghoul Button"  onClick={() => setGhoul(true)}/>
                    </Link>
                </div>

                <div className="king">
                    <Link to="/addToDo">
                    <img src={kingButton} alt = "King Button"/>
                    </Link>
                </div>

                <div className="NoGhoul">
                    <Link to="/addToDo">
                        <img src={noGhoul} alt = "NO GHOUl"/>
                    </Link>
                </div>

            </div>
            <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>

            </Popup>
        </div>
    )
}

export default GhoulScreen;