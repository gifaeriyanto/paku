import React, { useContext, forwardRef, useEffect } from 'react';
import { TweenMax } from 'gsap';
import { IDropdownMenu } from '../dropdown.types';
import { MenuStyled } from '../dropdown.styles';
import DropdownContext from '../dropdown.context';

const Menu: React.FC<IDropdownMenu> = forwardRef(
  ({ right, children, ...props }, ref: React.Ref<HTMLDivElement>) => {
    const { show } = useContext(DropdownContext);

    useEffect(() => {
      if (show) {
        TweenMax.to('.paku-dropdown .paku-dropdown-menu', 0.2, {
          top: 'calc(100% + 4px)',
          opacity: 1,
          display: 'block',
        });
      } else {
        TweenMax.to('.paku-dropdown .paku-dropdown-menu', 0.2, {
          top: 0,
          opacity: 0,
          display: 'none',
        });
      }
    }, [show]);

    return (
      <MenuStyled
        right={right}
        ref={ref}
        className="paku-dropdown-menu"
        data-testid="paku-dropdown-menu"
        {...props}
      >
        {children}
      </MenuStyled>
    );
  },
);

Menu.displayName = 'Dropdown.Menu';

export default Menu;
