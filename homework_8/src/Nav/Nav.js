import React from 'react';  

class Nav extends React.Component {
    render() {
         
        let nav = this.props.nav;  
        /* 
        let nav = {
            "main": '/index',
            "about": '/about',
            "price": '/buy/price'
        }
        */
        return(
           <nav>  
                <ul>
                    {Object.keys(nav).map(elem => {
                        return <li><a href="{nav[elem]}">{elem}</a></li>
                    })}
                </ul>  
           </nav>
        )
    }
}  

export default Nav;  


