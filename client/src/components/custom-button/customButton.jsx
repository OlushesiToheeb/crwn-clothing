import React from 'react';

import { CustomButtonContainer } from './customButtonStyles';

const CustomButton = ({ children, ...rest }) => (
    <CustomButtonContainer {...rest}>{children}</CustomButtonContainer>
);

export default CustomButton;
