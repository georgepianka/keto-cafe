import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartIcon from './cartIcon.js';
import CartDropdown from './cartDropdown.js';

import logo from '../KetoCafe.png';

import { auth } from '../firebase/firebase.utils.js';

import '../styles/header.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src={logo} className="logo" alt="logo" />
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          LOG OUT
        </div>
      ) : (
        <Link className='option' to='/login'>
          LOG IN
        </Link>
      )}
      <CartIcon />
    </div>

    {hidden ? null : <CartDropdown />}

  </div>
);

export default connect(
  ({ user: { currentUser }, cart: { hidden } }) =>
  ({ currentUser, hidden})
)(Header);
