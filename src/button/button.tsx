import React from 'react';
import { IButton } from './button.types';

const Button: React.FC<IButton> = ({ children, ...props }) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
