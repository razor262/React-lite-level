import React from 'react';  
import './Main.css';  
import MainImg from './../img/group_21.png';  
import About from './About/About';  
import Skils from './Skils/Skils';  
import Portfolio from './Portfolio/Portfolio';  
//import Contacts from './Contacts/Contacts';  

class Main extends React.Component {
    render() {
        return (
            <> 
            <div className="first__screen">
               <div className="first__box">
                    <h1>Denis Novik</h1>  
                    <h6>UX|UI desiner 24 years old, Minsk</h6>
                    <p>RU|<span>ENG</span></p>
               </div>
                <div className="first__image">
                    <img src={MainImg} alt="pikture" />
                </div>  
            </div>  
            <div className="second__screen">
                <About />  
                 
            </div>
            <Skils />
            <Portfolio /> 
            </>
        )
    }
}  

export default Main;
