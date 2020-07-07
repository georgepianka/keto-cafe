import React from 'react';

import LogIn from '../components/logIn.js';
import SignUp from '../components/signUp.js';

import '../styles/log-in-and-sign-up.scss';


const LogInAndSignUp = () => (
  <div className='log-in-and-sign-up'>
    <LogIn />
    <SignUp />
  </div>
);

export default LogInAndSignUp;
