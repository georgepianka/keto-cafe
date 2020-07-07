import React from 'react';

import '../styles/custom-button.scss';

const CustomButton = ({ children, isGoogleLogIn, ...otherProps }) => (
  <button className={`${isGoogleLogIn ? 'google-log-in' : ''} custom-button`}
    {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
