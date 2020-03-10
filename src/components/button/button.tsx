import React from 'react';
import { IButton } from './button.types';
import { ButtonBase } from './button.styles';

const Button: React.FC<IButton> = ({ customStyle, children, ...props }) => (
  <ButtonBase customStyle={customStyle} {...props}>
    {children}
  </ButtonBase>
);

export default Button;
