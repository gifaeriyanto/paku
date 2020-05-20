import React, { forwardRef } from 'react';
import { IButton } from './button.types';
import { ButtonStyled } from './button.styles';

const Button: React.FC<IButton> = forwardRef(
  (
    {
      variant = 'primary',
      outline,
      block,
      customStyle,
      children,
      icon,
      iconRight,
      iconOnly,
      ...props
    },
    ref: React.Ref<HTMLButtonElement>,
  ) => {
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
        ref={ref}
        data-testid="paku-button"
        {...props}
      >
        {renderIcon()}
        <span>{children}</span>
      </ButtonStyled>
    );
  },
);

Button.displayName = 'Button';

export default Button;
