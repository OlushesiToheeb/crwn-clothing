import React from 'react';

import './customButton.scss';

const CustomButton = ({ children, ...rest }) => (
  <button className='custom-button' {...rest}>
    {children}
  </button>
);

export default CustomButton;
