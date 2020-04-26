import React, { useContext, forwardRef } from 'react';
import { IDropdownItem } from '../dropdown.types';
import { ItemStyled } from '../dropdown.styles';
import DropdownContext from '../dropdown.context';

const Item: React.FC<IDropdownItem> = forwardRef(
  (
    { active = false, color, onClick, children, as, ...props },
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const { setShow } = useContext(DropdownContext);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setShow && setShow(false);
      onClick && onClick(e.currentTarget.textContent);
    };

    return (
      <ItemStyled
        active={active}
        onClick={handleClick}
        color={color}
        ref={ref}
        as={as}
        {...props}
      >
        {children}
      </ItemStyled>
    );
  },
);

Item.displayName = 'Dropdown.Item';

export default Item;
