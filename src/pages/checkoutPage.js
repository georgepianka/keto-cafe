import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../components/checkoutItem.js';
import StripeCheckoutButton from '../components/stripeButton.js';

import { selectCartItems, selectCartTotal } from '../redux/cart/cartSelectors.js';

import '../styles/checkout-page.scss';

const Checkout = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>

    <div className='test-warning'>
      *Stripe Checkout TEST MODE Credit Card Number Below*
      <br />
      4242 4242 4242 4242 - Exp: 11/21 - CVV: 123
    </div>

    <StripeCheckoutButton price={total} />

  </div>
);



export default connect(
  createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
  })
)(Checkout);
