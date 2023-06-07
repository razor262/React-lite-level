import React from 'react'; 
import Nav from './Nav/Nav';  
import logo from './logo.svg';
import './App.css';  
import Footer from './Footer/Footer'

class App extends React.Component {
  render(props) {
  
  let nav = this.props.nav;
  let company = this.props.company;  
  let adress = this.props.adress; 
  let title = this.props.title;  
  console.log(company)
  console.log(adress) 
  console.log(title) 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{this.props.title}</h1> 
        <p>
          {this.props.hero}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
         
      </header>
      <Nav nav={nav}/> 
      <Footer title={title} company={company} adress={adress}/>
    </div>
  );
}
}
export default App;


