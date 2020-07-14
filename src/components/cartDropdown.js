import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CartItem from './cartItem.js';

import { selectCartItems } from '../redux/cart/cartSelectors.js';
import { toggleCartHidden } from '../redux/cart/cartActions.js';

import CustomButton from './customButton.js';

import '../styles/cart-dropdown.scss';

const CartDropdown = ({cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>

    {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
    ) : (
          <span className='empty-message'>Your cart is empty</span>
    )}

    </div>
    <CustomButton
      onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
      }}
    >
    GO TO CHECKOUT
    </CustomButton>
  </div>
);



export default withRouter(connect(
  createStructuredSelector({
    cartItems: selectCartItems
  })
)(CartDropdown));
