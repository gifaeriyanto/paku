import React from 'react';
import { IButton } from './button.types';
import { ButtonStyled } from './button.styles';

const Button: React.FC<IButton> = ({
  customStyle,
  variant,
  block,
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

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
