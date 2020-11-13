import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ 
  children,
   isGoogleSignIn,
   inverted,
    ...otherProps }) => (
  <button
  //when is inverted true add inverted class
    className={`${inverted ? 'inverted' : ''}
    ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;