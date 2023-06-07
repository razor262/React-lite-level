import React from 'react';  
import './Header.css';  

class Header extends React.Component{
        render() { 
        return (
            <> 
            <div className="header"> 
            <ul className="header__links"> 
                <li className="header__link aktive">Home</li>
                <li>About me</li>
                <li>Skils</li>
                <li>Portfolio</li>
                <li>Contacts</li>
            </ul> 
            
            <div className="header__hileate">

            </div> 
            </div>
            </>
        )
    
}  
} 

export default Header;  
