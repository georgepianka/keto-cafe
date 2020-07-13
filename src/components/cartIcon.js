import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../redux/cart/cartActions.js';

import { ReactComponent as ShoppingIcon } from '../shopping-cart.svg';

import '../styles/cart-icon.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

/*const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});*/

export default connect(
  null,
  { toggleCartHidden }
)(CartIcon);
