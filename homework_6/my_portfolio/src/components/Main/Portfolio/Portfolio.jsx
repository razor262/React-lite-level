import React from 'react';  
import './Portfolio.css';  
import girl from './Images/rebook_girl.png';
import man from './Images/rebook_man.png';
import camera from './Images/rebook_camera.png';

class Portfolio extends React.Component {
    render(){
        return(
            <div className="four__screen">
                <h3>Portfolio</h3>
                
                <img src={girl} alt="r_girt" />
                <p>Online fashion store - Homepage</p> 
                <img src={man} alt="r_man" />
                <p>Reebook Store - Concept</p> 
                <img src={camera} alt="r_camera" />  
                <p>Braun Landing Page - Concept</p>

            </div>
        )
    }
}  

export default Portfolio;  


