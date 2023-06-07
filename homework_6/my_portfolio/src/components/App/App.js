import React from 'react';  
import Header from './../Header/Header';  
import Main from './../Main/Main';  
import Footer from './../Footer/Footer';  

import './App.css';

class App extends React.Component {
  render() { 
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer /> 
    </div>
  );
}  
}

export default App;
