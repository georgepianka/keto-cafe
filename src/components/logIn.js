import React from 'react';

import FormInput from './formInput.js';
import CustomButton from './customButton.js';

import { signInWithGoogle } from '../firebase/firebase.utils.js';

import '../styles/log-in.scss';

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='log-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Log In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Log In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;
