import React from 'react';

import '../styles/custom-button.scss';

const CustomButton = ({ children, addToCart, isGoogleLogIn, isSignUp, ...otherProps }) => (
  <button className={`${addToCart ? 'add-to-cart' : ''} ${isGoogleLogIn ? 'google-log-in' : isSignUp ? 'sign-up' : ''} custom-button`}
    {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
