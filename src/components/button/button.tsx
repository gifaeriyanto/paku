import React from 'react';
import { IButton } from './button.types';
import { ButtonStyled } from './button.styles';

const Button: React.FC<IButton> = ({
  variant = 'primary',
  outline,
  block,
  customStyle,
  children,
  icon,
  iconRight,
  iconOnly,
  ...props
}) => {
  const renderIcon = () => {
    if (icon) {
      return icon;
    }
    return null;
  };

  return (
    <ButtonStyled
      variant={variant}
      customStyle={customStyle}
      outline={outline}
      block={block}
      iconRight={iconRight}
      iconOnly={iconOnly}
      {...props}
    >
      {renderIcon()}
      <span>{children}</span>
    </ButtonStyled>
  );
};

export default Button;
