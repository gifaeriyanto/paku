import React, { useContext, forwardRef } from 'react';
import { IDropdownMenu } from '../dropdown.types';
import { MenuStyled } from '../dropdown.styles';
import DropdownContext from '../dropdown.context';

const Menu: React.FC<IDropdownMenu> = forwardRef(
  ({ right, children, ...props }, ref: React.Ref<HTMLDivElement>) => {
    const { show } = useContext(DropdownContext);

    return (
      <MenuStyled show={show} right={right} ref={ref} {...props}>
        {children}
      </MenuStyled>
    );
  },
);

Menu.displayName = 'Dropdown.Menu';

export default Menu;
