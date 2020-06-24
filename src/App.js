import React from 'react';
import logo from './KetoCafe.jpg';
import './App.css';
import HomePage from './containers/homepage.js';


function App() {
  return (
    <div>
        <HomePage />
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
