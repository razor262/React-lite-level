import React from 'react';  
import './Footer.css';  

import Linkedin from './img/Group_2.svg';  
import Instagram from './img/Group_8.svg';  
import Behance from './img/Group_9.svg';  
import Boll from './img/Group_10.svg';  

class Footer extends React.Component {
   render() {
      return(
         <div className="footer__container" >
               <h3>Contacts</h3>
               <p>Want know more or just chat? You are welcome!</p>
               <button>Send message</button>
               
               <div className="footer__icons">
                  <img src={Linkedin} alt="linkedin" />
                  <img src={Instagram} alt="instagram" />
                  <img src={Behance} alt="behance" />
                  <img src={Boll} alt="boll" />
               </div>
                
               <p className="footer__text">
                  Like me on 
                  Linkedin, Instagram, Behance, Dripple
               </p>
                
         </div>
      )
   } 
}  

export default Footer; 


