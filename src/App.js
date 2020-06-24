import React from 'react';
import logo from './KetoCafe.jpg';
import './App.css';
import HomePage from './containers/homepage.js';


function App() {
  return (
    <div>
        <img src={logo} className="logo" alt="logo" />
        <HomePage />
    </div>
  );
}

export default App;
