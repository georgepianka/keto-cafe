import React from 'react';
import logo from './KetoCafe.png';
import './App.css';
import HomePage from './containers/homepage.js';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
        <img src={logo} className="logo" alt="logo" />
        <HomePage />
    </div>
  );
}


const MealsPage = () => (
  <div>
    <h1>MEALS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/meals' component={MealsPage} />
      </Switch>
    </div>
  );
}

export default App;
