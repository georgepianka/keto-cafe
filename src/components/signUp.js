import React from 'react';

import FormInput from './formInput.js';
import CustomButton from './customButton.js';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils.js';

import '../styles/sign-up.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { userName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user: authUserState } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(authUserState);
      await createUserProfileDocument(authUserState, { userName, password });

      this.setState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { userName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='userName'
            value={userName}
            onChange={this.handleChange}
            label='User Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit' isSignUp>
          SIGN UP
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
