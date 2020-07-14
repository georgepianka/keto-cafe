import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../redux/cart/cartActions.js';
import { selectCartItemsCount } from '../redux/cart/cartSelectors.js';

import { ReactComponent as ShoppingIcon } from '../shopping-cart.svg';

import '../styles/cart-icon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

/*const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});*/

export default connect(
  createStructuredSelector({
    itemCount: selectCartItemsCount
  }),
  { toggleCartHidden }
)(CartIcon);
