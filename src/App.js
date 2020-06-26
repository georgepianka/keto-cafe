import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './containers/homepage.js';
import Shop from './containers/shop.js';
import Header from './components/header.js';



const MealsPage = () => (
  <div>
    <h1>MEALS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/meals' component={MealsPage} />
      </Switch>
    </div>
  );
}

export default App;
