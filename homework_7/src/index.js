import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Footer from './Footer/Footer';


let nav = { main: '#index', about: '#about', price: '#price' };
let title = 'My new site';  
let company = { mobile: '89194566456', phone: '25645643' };
let adress = { town: 'Syzran', street: 'truda', house: '42/5' }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App nav={nav} title={title} company={company} adress={adress} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
