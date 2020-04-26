import React, { useContext, forwardRef } from 'react';
import { ToggleStyled } from '../dropdown.styles';
import DropdownContext from '../dropdown.context';

const Toggle: React.FC<React.HTMLAttributes<HTMLDivElement>> = forwardRef(
  ({ children, ...props }, ref: React.Ref<HTMLDivElement>) => {
    const { show, setShow } = useContext(DropdownContext);

    const handleClick = () => {
      setShow && setShow(!show);
    };

    return (
      <ToggleStyled onClick={handleClick} ref={ref} {...props}>
        {children}
      </ToggleStyled>
    );
  },
);

Toggle.displayName = 'Dropdown.Toggle';

export default Toggle;
