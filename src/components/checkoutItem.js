import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItemFromCart, reduceItemInCart } from '../redux/cart/cartActions.js'

import '../styles/checkout-item.scss';

const CheckoutItem = ({ cartItem, cartItem: { name, imageUrl, price, quantity }, removeItemFromCart, addItem, reduceItemInCart }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>

    <span className='quantity'>
        <div className='arrow' onClick={() => reduceItemInCart(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
    </span>

    <span className='price'>{price}</span>
    <div className='remove-button' onClick={() => removeItemFromCart(cartItem)}>
    &#10005;
    </div>
  </div>
);

/* const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItemFromCart(item))
	 });
*/

export default connect(
  null,
  {removeItemFromCart, addItem, reduceItemInCart}
)(CheckoutItem);
