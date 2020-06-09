import React, { useContext, forwardRef } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { ToggleStyled } from '../dropdown.styles';
import DropdownContext from '../dropdown.context';

const Toggle: React.FC<React.HTMLAttributes<HTMLDivElement>> = forwardRef(
  ({ children, ...props }, ref: React.Ref<HTMLDivElement>) => {
    const { show, setShow } = useContext(DropdownContext);

    const handleClick = () => {
      setShow && setShow(!show);
    };

    return (
      <ToggleStyled
        onClick={handleClick}
        ref={ref}
        className="paku-dropdown-toggle"
        {...props}
      >
        {children}
        <FiChevronRight />
      </ToggleStyled>
    );
  },
);

Toggle.displayName = 'Dropdown.Toggle';

export default Toggle;
