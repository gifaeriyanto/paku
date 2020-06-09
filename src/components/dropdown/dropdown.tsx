import React, { useState, useEffect, useRef } from 'react';
import { Wrapper } from './dropdown.styles';
import { IDropdown, IDropdownPartials } from './dropdown.types';
import Toggle from './partials/toggle';
import Item from './partials/item';
import Menu from './partials/menu';
import DropdownContext from './dropdown.context';

const Dropdown: React.FC<IDropdown> & IDropdownPartials = ({
  children,
  ...props
}) => {
  const [showState, setShowState] = useState(false);
  const wrapperRef = useRef<any>(null);

  const handleChangeState = () => {
    setShowState(!showState);
  };

  const onWindowClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (!wrapperRef?.current?.contains(e.target)) {
      setShowState(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', onWindowClick);
    return () => window.removeEventListener('click', onWindowClick);
  });

  return (
    <Wrapper ref={wrapperRef} {...props} className="paku-dropdown">
      <DropdownContext.Provider
        value={{
          show: showState,
          setShow: handleChangeState,
        }}
      >
        {children}
      </DropdownContext.Provider>
    </Wrapper>
  );
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;
Dropdown.Toggle = Toggle;
Dropdown.Item = Item;
Dropdown.Menu = Menu;
