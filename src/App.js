import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage.js';
import Shop from './pages/shop.js';
import Header from './components/header.js';
import LogInAndSignUp from './pages/logInAndSignUp.js'



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
        <Route path='/login' component={LogInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
