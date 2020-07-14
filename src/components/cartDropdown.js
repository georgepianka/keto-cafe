import React from 'react';
import { connect } from 'react-redux';
import CartItem from './cartItem.js';

import CustomButton from './customButton.js';

import '../styles/cart-dropdown.scss';

const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default connect(
  ({ cart: { cartItems } }) => ({
  cartItems
  })
)(CartDropdown);
