import React from 'react';
import { IButton } from './button.types';
import { ButtonStyled } from './button.styles';

const Button: React.FC<IButton> = ({
  variant = 'primary',
  block,
  customStyle,
  children,
  ...props
}) => (
  <ButtonStyled
    variant={variant}
    customStyle={customStyle}
    block={block}
    {...props}
  >
    {children}
  </ButtonStyled>
);

export default Button;
