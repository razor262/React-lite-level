import React from 'react';  
import './Skils.css';  
import Photoshop from './images/Group_1.svg';  
import Ilustrator from './images/Group_2.svg';  
import After_effects from './images/Group_3.svg'; 
import Figma from './images/Group_4.svg';  

class Skils extends React.Component {
    render() {
        return(
            <div className="three__screen">
                <h3>Skills</h3>
                <p>I work in such programs as</p>
                <div className="three__boxis">
                   <img src={Photoshop} alt="Photoshop" />
                   <img src={Ilustrator} alt="Ilustrator" />
                   <img src={After_effects} alt="After_effects" />
                   <img src={Figma} alt="Figma" />
                </div>
            </div>
        )
    }
}  

export default Skils;  


