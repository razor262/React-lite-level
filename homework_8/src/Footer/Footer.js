import React from 'react';

class Footer extends React.Component {
    render() {
        
        let company = this.props.company; 
        let adress = this.props.adress;  
        let title = this.props.title;
        console.log(title)
        console.log(company)
        console.log(adress)
        return(
           <> 
           <h3>
                {this.props.title}
           </h3>
           <nav> 
           <ul>
                
                {Object.keys(company).map(elem => {
                    return <li><a href="{company[elem]}">{elem}</a></li>
                })}  
            
            </ul>
            <ul>
          
                {Object.keys(adress).map(elem => {   
                    return <li><a href="{adress[elem]}">{elem}</a></li>
                })}
            
            </ul>
            </nav> 
            </> 
        )
    }
}  

export default Footer;


