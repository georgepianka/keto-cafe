import React from 'react';

import '../styles/custom-button.scss';

const CustomButton = ({ children, isGoogleLogIn, isSignUp, ...otherProps }) => (
  <button className={`${isGoogleLogIn ? 'google-log-in' : isSignUp ? 'sign-up' : ''} custom-button`}
    {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
